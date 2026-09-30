import type { SVGProps } from "react";
import type { SocialKey } from "@/lib/site";

type IconProps = SVGProps<SVGSVGElement> & { name: SocialKey };

/**
 * Íconos de marcas dibujados con el mismo estilo 24px / trazo 1.5 que los íconos lucide de la UI,
 * para que el footer sea visualmente coherente con el resto del theme.
 */
const PATHS: Record<SocialKey, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </>
  ),
  vimeo: (
    <path d="M21.5 7.5c-.1 2-1.5 4.6-4.1 8-2.7 3.5-5 5.2-6.8 5.2-1.2 0-2.1-1-2.9-3.2L6.3 12C5.8 9.9 5.2 8.8 4.6 8.8c-.1 0-.6.3-1.5.9l-.9-1.2 2.9-2.5c1.3-1.1 2.3-1.7 2.9-1.8 1.5-.1 2.5.9 2.8 3.1.4 2.4.6 3.9.8 4.5.4 1.9.9 2.9 1.4 2.9.4 0 1-.6 1.8-1.8.8-1.2 1.2-2.2 1.3-2.8.1-1-.3-1.6-1.3-1.6-.5 0-.9.1-1.4.3.9-2.9 2.6-4.3 5.1-4.2 1.9 0 2.8 1.2 2.7 3.5z" />
  ),
  tiktok: <path d="M15 3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.7V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3z" />,
};

export function SocialIcon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
