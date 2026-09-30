# Portafolio de Felipe Pask

Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript. Bilingüe (ES/EN), tema oscuro, pensado primero
para móvil y listo para Vercel.

```bash
npm install
npm run dev     # http://localhost:3000 → redirige a /es o /en
npm run build   # build de producción
npm run lint
```

## Rutas

Todas las rutas están en inglés y llevan el idioma como prefijo, así cada página se mide por separado
en analytics:

| URL | Página |
|---|---|
| `/es`, `/en` | Inicio (video hero, trabajos destacados, marcas, CTA) |
| `/{lang}/about` | Sobre mí |
| `/{lang}/portfolio` | Grilla de films (filtro `?category=commercial\|documentary\|music-video\|travel`) |
| `/{lang}/portfolio/{slug}` | Página de un proyecto (video + detalles) |
| `/{lang}/portfolio/photos` | Galería de fotos con lightbox |
| `/{lang}/brands` | Marcas con las que ha trabajado |
| `/{lang}/contact` | Formulario de contacto |

`src/proxy.ts` envía `/` (y cualquier URL sin idioma) a `/es` o `/en` según la cookie del selector de
idioma o, si no existe, según el idioma del navegador.

## Arquitectura de carpetas (por feature)

```
src/
├── app/                       # SOLO ROUTING: cada page.tsx monta un feature
│   ├── [lang]/                #   layout raíz por idioma
│   ├── sitemap.ts · robots.ts · manifest.ts
│   └── globals.css            #   tokens del tema (colores, fuentes)
├── proxy.ts                   # detección/redirección de idioma
├── lib/                       # utilidades compartidas (sin React)
│   ├── i18n/                  #   config, diccionarios es/en, getDictionary
│   ├── routes.ts · site.ts    #   rutas y datos globales (nombre, correo, redes)
│   └── seo.ts · network.ts · cn.ts
└── (site)/                    # features
    ├── common/                #   Header, Footer, íconos, hooks compartidos
    ├── home/                  #   video hero
    ├── about/
    ├── portfolio/             #   types · data (repository + mocks) · components · views
    ├── brands/
    └── contact/               #   actions (server action) · hooks · components · views · lib (zod)
```

Flujo de dependencias: `app → index.tsx → views → components`, `hooks → actions → data`. `components/`
nunca importa `actions/` ni `data/`. Cada feature expone su API pública desde `index.tsx`.

## Dónde editar el contenido

| Qué | Archivo |
|---|---|
| Nombre, correo, WhatsApp, redes sociales | `src/lib/site.ts` |
| Todos los textos del sitio (ES/EN) | `src/lib/i18n/dictionaries/es.ts` · `en.ts` |
| Video y póster del hero | `src/(site)/home/data/hero.ts` |
| Proyectos (films) | `src/(site)/portfolio/data/mocks/projects.mock.ts` |
| Fotos | `src/(site)/portfolio/data/mocks/photos.mock.ts` |
| Marcas | `src/(site)/brands/data/brands.repository.ts` |
| Colores y fuentes | `src/app/globals.css` (`@theme`) · `src/app/[lang]/layout.tsx` |

El español define el tipo del diccionario: si agregas una key en `es.ts` y te falta en `en.ts`,
TypeScript lo marca como error.

**Video:** lee [`docs/VIDEO.md`](docs/VIDEO.md) antes de subir cualquier archivo.

## Deploy en Vercel

1. Sube el repo a GitHub e impórtalo en Vercel (detecta Next.js automáticamente).
2. Variables de entorno:
   - `NEXT_PUBLIC_SITE_URL` = `https://tudominio.com` (canonicals, sitemap, OG).
   - `RESEND_API_KEY` = key de [resend.com](https://resend.com) (sin ella el formulario no envía correos).
   - `CONTACT_TO_EMAIL` = correo donde llegan las consultas.
   - `CONTACT_FROM_EMAIL` = remitente verificado, ej. `Web <hola@tudominio.com>`.
3. Activa **Analytics** y **Speed Insights** en el proyecto de Vercel (ya están conectados en el layout).
4. Quita `picsum.photos` de `next.config.ts` cuando estén las imágenes reales.
