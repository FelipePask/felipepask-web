# Guía de video: rápido en celulares con datos móviles

**Regla de oro:** el máster 4K nunca se sube a la web tal cual. Se exportan versiones livianas para cada uso.

| Uso | Dónde vive | Resolución | Duración | Peso objetivo |
|---|---|---|---|---|
| **Hero** (fondo del inicio) | `public/media/hero/` o Vercel Blob | 720p (móvil) + 1080p (escritorio) | loop de 8–15 s | 1.5–2.5 MB / 4–6 MB |
| **Preview** (hover en las tarjetas del portafolio) | `public/media/previews/` | 480p–540p | 4–6 s | < 1 MB |
| **Film completo** (página del proyecto) | **Vimeo o YouTube** (o Mux / Cloudflare Stream) | máster 4K | completo | lo resuelve el streaming |
| **Póster** (fotograma de cada video) | `public/media/posters/` | JPG 1920×1080 | — | next/image lo convierte a AVIF/WebP |

## Por qué el video completo va en Vimeo/YouTube

Usan **streaming adaptativo** (HLS/DASH): dividen el 4K en varias calidades y el reproductor elige la
adecuada para cada conexión. Un celular en 3G ve 480p sin cortes; con fibra se ve en 4K. Hacer eso por
cuenta propia es caro. Además, el sitio solo carga su reproductor **cuando el usuario presiona play**
(patrón "facade" en `VideoEmbed.tsx`), así que no afecta a Lighthouse.

> Una cuenta privada de Vimeo Plus/Pro permite ocultar el logo, elegir el color del reproductor y
> restringir el embed a tu dominio. Es la opción más profesional para un portafolio.

## Lo que el sitio ya hace por ti

- El hero muestra **primero el póster** (es el LCP y pinta en ~1 s); el video carga después.
- En celulares carga el **720p**, en escritorio el **1080p**.
- Si el usuario tiene **ahorro de datos** activado, está en **2G/3G** o pidió **movimiento reducido**, el video no se descarga: solo ve el póster.
- Los previews de las tarjetas solo se descargan al pasar el mouse (escritorio) o cuando la tarjeta está en pantalla (móvil).
- Hay un botón para pausar el hero (accesibilidad, WCAG 2.2.2).

## Exportar con ffmpeg

Instala ffmpeg (`winget install Gyan.FFmpeg`) y ejecuta desde la carpeta del máster.

### Hero: 1080p (escritorio)
```bash
ffmpeg -i master.mov -ss 00:00:05 -t 12 -an -vf "scale=-2:1080,fps=25" -c:v libx264 -profile:v high -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart hero-1080.mp4
ffmpeg -i master.mov -ss 00:00:05 -t 12 -an -vf "scale=-2:1080,fps=25" -c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 hero-1080.webm
```

### Hero: 720p (móvil)
```bash
ffmpeg -i master.mov -ss 00:00:05 -t 12 -an -vf "scale=-2:720,fps=25" -c:v libx264 -profile:v high -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart hero-720.mp4
ffmpeg -i master.mov -ss 00:00:05 -t 12 -an -vf "scale=-2:720,fps=25" -c:v libvpx-vp9 -crf 38 -b:v 0 -row-mt 1 hero-720.webm
```

- `-an` quita el audio (el hero es mudo de todas formas y así pesa menos).
- `-movflags +faststart` permite empezar a reproducir antes de que termine la descarga.
- Si un archivo queda muy pesado, sube `-crf` de a 2 (más compresión) o acorta `-t`.
- Versión móvil **vertical** (opcional, se ve muy bien): agrega `crop=ih*9/16:ih,` al inicio de `-vf`.

### Póster del hero (primer fotograma)
```bash
ffmpeg -i hero-1080.mp4 -frames:v 1 -q:v 3 hero-poster.jpg
```

### Preview para las tarjetas del portafolio
```bash
ffmpeg -i master.mov -ss 00:00:20 -t 5 -an -vf "scale=-2:540,fps=24" -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart <slug>.mp4
```

## Dónde conectarlos

- Hero → `src/(site)/home/data/hero.ts` (llenar `video` y `poster`).
- Previews y pósters → `src/(site)/portfolio/data/mocks/projects.mock.ts` (`previewSrc`, `poster`).
- Vimeo/YouTube → `embed: { provider: "vimeo", id: "123456789" }` en cada proyecto.

## Hosting y ancho de banda

El plan Hobby de Vercel incluye ~100 GB/mes de transferencia. Un hero de 5 MB × 10.000 visitas = 50 GB.
Si el tráfico crece, mueve `/media` a **Vercel Blob** o **Cloudflare R2** (R2 no cobra egress) y
actualiza las URLs; nada más cambia.
