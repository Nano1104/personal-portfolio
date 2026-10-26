# CLAUDE.md

Portfolio personal (single page) de Mariano Gil. Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Framer Motion. Deploy en Vercel.

## Package manager

Usar **pnpm** (`pnpm-lock.yaml` es el lockfile vigente). `package-lock.json` fue eliminado; no usar npm ni yarn.

```sh
pnpm install
pnpm dev      # servidor de desarrollo en http://localhost:3000
pnpm build    # build de producción
pnpm start    # servir el build
```

No hay tests. Para verificar cambios, correr `pnpm lint` y `pnpm build`.

## Estructura

- `src/app/layout.tsx` — fuentes (Fraunces, DM Sans, DM Mono vía `next/font`, expuestas como `--font-serif/sans/mono`) y metadata/SEO.
- `src/app/page.jsx` — compone la página: Nav → Hero → Work → About → Contact → Footer.
- `src/components/sections/` y `src/components/layout/` — componentes de cada sección (client components con `'use client'` cuando usan Framer Motion).
- `src/lib/data.ts` — **fuente única de todo el contenido** (textos, links, proyectos, stack). Para cambiar contenido, editar acá, no en los componentes.
- `src/lib/motion.ts` — variantes de animación centralizadas (`fadeUp`, `fadeIn`, `stagger`, `heroItem`, `viewport`). Reusarlas en lugar de definir animaciones inline.
- `src/app/globals.css` — design tokens (`--bg`, `--t1`, `--accent`, etc.) y clases de layout responsive (ej. `hero-section`, `section-divider`).
- `public/images/` — screenshots de proyectos, referenciados desde `data.ts` con rutas tipo `/images/...`.

## Convenciones

- Alias de imports: `@/*` → `src/*`.
- TypeScript con `strict: false`; conviven archivos `.tsx` y `.jsx`.
- Estilo de código: comillas simples, sin punto y coma, 4 espacios en componentes.
- `src/app/ui/fonts.js` (Poppins/Montserrat/Roboto) es legacy y no se usa en el layout actual.
