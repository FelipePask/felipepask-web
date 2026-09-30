import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { PageHeader } from "@/(site)/common/components/PageHeader";
import { SocialIcon } from "@/(site)/common/components/icons/SocialIcon";
import { ContactFormView } from "./views/ContactFormView";

type ContactProps = { dict: Dictionary };

export function Contact({ dict }: ContactProps) {
  const { contact, a11y } = dict;
  const whatsapp = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;

  const direct = [
    { href: `mailto:${SITE.email}`, label: SITE.email, icon: <Mail aria-hidden="true" className="size-5" /> },
    { href: whatsapp, label: "WhatsApp", icon: <MessageCircle aria-hidden="true" className="size-5" />, external: true },
    ...SITE.socials.slice(0, 2).map((s) => ({
      href: s.href,
      label: s.label,
      icon: <SocialIcon name={s.key} className="size-5" />,
      external: true,
    })),
  ];

  return (
    <>
      <PageHeader title={contact.title} subtitle={contact.subtitle} />
      <div className="container-site grid max-w-5xl gap-12 pb-24 md:grid-cols-[2fr_1fr]">
        <ContactFormView labels={contact.form} />

        <aside aria-labelledby="direct-title">
          <h2 id="direct-title" className="eyebrow mb-4">
            {contact.direct}
          </h2>
          <ul className="space-y-2">
            {direct.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 text-muted ring-1 ring-ink-800 transition-colors hover:text-fg hover:ring-ink-600"
                >
                  {d.icon}
                  <span className="truncate">{d.label}</span>
                  {d.external && <span className="sr-only">{a11y.externalLink}</span>}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
