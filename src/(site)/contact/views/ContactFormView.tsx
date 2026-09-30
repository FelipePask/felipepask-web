"use client";

import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { ContactForm } from "../components/ContactForm";
import { useContactForm } from "../hooks/useContactForm";

export function ContactFormView({ labels }: { labels: Dictionary["contact"]["form"] }) {
  const { state, formAction, pending } = useContactForm();
  return <ContactForm state={state} formAction={formAction} pending={pending} labels={labels} />;
}
