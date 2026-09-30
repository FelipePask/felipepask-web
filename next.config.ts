import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 85],
    // Imágenes dummy mientras llegan las reales. Quitar cuando todo esté en /public o en tu CDN.
    remotePatterns: [new URL("https://picsum.photos/**"), new URL("https://fastly.picsum.photos/**")],
  },
  async headers() {
    return [
      {
        // Caché largo para el media propio (loops del hero, clips de preview, pósters).
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
