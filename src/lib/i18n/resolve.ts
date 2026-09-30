import "server-only";
import { notFound } from "next/navigation";
import { hasLocale } from "./config";
import { getDictionary } from "./get-dictionary";

/** Valida el segmento [lang] y carga su diccionario (404 para idiomas desconocidos). */
export async function resolveLocale(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { locale: lang, dict: await getDictionary(lang) };
}
