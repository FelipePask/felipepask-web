"use server";

import { SITE } from "@/lib/site";
import { contactSchema, type ContactInput } from "../lib/schema";
import type { ContactField, ContactState } from "../types";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Envía la consulta con Resend (https://resend.com, el plan gratis alcanza de sobra).
 * Requiere RESEND_API_KEY y CONTACT_TO_EMAIL en las variables de entorno de Vercel.
 * Sin la key (desarrollo local) solo registra el mensaje en consola.
 */
async function deliver(data: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set, message not sent:", data);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Web <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? SITE.email,
      reply_to: data.email,
      subject: `Nuevo contacto web: ${data.name} (${data.projectType})`,
      html: `<p><b>Nombre:</b> ${escape(data.name)}</p>
             <p><b>Correo:</b> ${escape(data.email)}</p>
             <p><b>Tipo:</b> ${escape(data.projectType)}</p>
             <p>${escape(data.message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: los usuarios reales nunca llenan este campo oculto.
  if (formData.get("company")) return { status: "success" };

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, true>> = {};
    for (const issue of parsed.error.issues) fieldErrors[issue.path[0] as ContactField] = true;
    return { status: "error", fieldErrors, values: raw as Partial<ContactInput> };
  }

  try {
    await deliver(parsed.data);
    return { status: "success" };
  } catch (error) {
    console.error("[contact] send failed", error);
    return { status: "error", values: parsed.data };
  }
}
