import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/(site)/common/components/Header/Header";
import { Footer } from "@/(site)/common/components/Footer";
import { LOCALES, hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { SITE } from "@/lib/site";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: `${SITE.name} | ${dict.meta.home.title}`, template: `%s | ${SITE.name}` },
    description: dict.meta.siteDescription,
    applicationName: SITE.name,
    icons: { icon: "/icon.svg" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body id="top" className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-100 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          {dict.a11y.skipToContent}
        </a>
        <Header locale={lang} siteName={SITE.name} nav={dict.nav} a11y={dict.a11y} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={lang} nav={dict.nav} footer={dict.footer} a11y={dict.a11y} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
