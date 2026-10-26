// ─────────────────────────────────────────────────────────────────
// lib/data.ts
// Single source of truth for all portfolio content.
// Update this file when you want to change any text or links.
// ─────────────────────────────────────────────────────────────────

export type Screenshot = {
    /** Path relative to /public — e.g. "/images/sw-catalog.png" */
    src: string
    alt: string
}

export type Project = {
    id: string
    client: string
    year: string
    type: string
    title: [string, string]      // two lines for the display heading
    description: string
    challenge: string
    highlights: string[]
    stack: string[]
    url: string
    /** Omit when the repository is private */
    github?: string
    urlText: string
    /** primary: shown left (larger). secondary: shown right (smaller). */
    screenshots: {
        primary: Screenshot
        secondary: Screenshot
    }
}

export type StackGroup = {
    label: string
    items: string[]
}

// ─────────────────────────────────────────
// PERSONAL
// ─────────────────────────────────────────
export const personal = {
    name: 'Mariano Nicolas Gil',
    shortName: 'Mariano Gil',
    role: 'Desarrollador fullstack',
    location: 'Buenos Aires, Argentina',
    email: 'marianogil2004@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mariano-gil/',
    github: 'https://github.com/Nano1104',
    headline: 'Desarrollador fullstack. Construyo aplicaciones web que usan negocios reales todos los días.',
    tagline: 'Desde sistemas de inventario hasta tiendas online con cuentas de usuario.',
    bio: [
        'Soy desarrollador fullstack autodidacta y vivo en Buenos Aires. Construyo productos web completos con React, Next.js y Node.js: desde el diseño de la base de datos y la API hasta el frontend publicado y funcionando.',
        'Me enfoco en problemas reales de negocio: sistemas de inventario que reemplazan planillas manuales, tiendas online con flujos de autenticación complejos y paneles de administración que puede usar un equipo sin perfil técnico. Ya tengo dos aplicaciones en producción, con clientes y pedidos reales.',
        'Trabajo con atención al detalle, me comunico con claridad y me importan tanto la calidad del código como la experiencia de quien usa el producto. Busco puestos fullstack o frontend, remotos o en Buenos Aires, y también tomo proyectos freelance.',
    ],
}

// ─────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────
export const projects: Project[] = [
    {
        id: '01',
        client: 'SW Autoparts',
        year: '2024-2025',
        type: 'Plataforma B2B',
        title: ['Gestión de', 'inventario'],
        description:
            'SW Autoparts administraba todo su catálogo de repuestos en planillas de Excel y necesitaba llevarlo a una plataforma web con búsqueda y filtros. El sistema maneja más de 2.100 productos, con filtros combinados, navegación por categorías y un flujo de reservas.',
        challenge:
            'Construir un buscador con filtros para más de 2.100 productos, de decenas de marcas, categorías y rangos de precio, que respondiera al instante sin depender de un servicio de búsqueda pago.',
        highlights: [
            'Diseñé y desarrollé las APIs REST para todo el ciclo del inventario: productos, categorías, stock y pedidos de reserva.',
            'Implementé filtros combinados (marca, rango de precio y categoría) con navegación por breadcrumbs en un catálogo de más de 2.100 productos.',
            'Desarrollé un sistema de reservas que permite a los clientes hacer pedidos antes de confirmar el pago.',
        ],
        stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Render'],
        url: 'https://www.swautoparts.com',
        github: 'https://github.com/Nano1104/general-parts',
        urlText: 'swautoparts.com',
        screenshots: {
            primary: {
                // Put your screenshot in /public/images/sw-catalog.png
                src: '/images/sw-home.png',
                alt: 'Página de inicio de SW Autoparts',
            },
            secondary: {
                // Put your screenshot in /public/images/sw-product.png
                src: '/images/sw-catalog.png',
                alt: 'Catálogo de repuestos de SW Autoparts con filtros por marca y precio',
            },
        },
    },
    {
        id: '02',
        client: 'Darc Cuir & Yatay',
        year: '2025',
        type: 'Tienda online',
        title: ['E-commerce', 'para dos marcas'],
        description:
            'Dos marcas de marroquinería de una misma fábrica necesitaban reemplazar por completo un sitio anterior que no funcionaba bien. El resultado es una plataforma compartida con una tienda independiente para cada marca, pedidos con cuenta de usuario y un único panel de administración para las dos.',
        challenge:
            'Mantener el carrito de usuarios anónimos: había que permitir navegar y agregar productos sin iniciar sesión y, al ingresar, sumar ese carrito a la cuenta del usuario sin perder ni duplicar productos.',
        highlights: [
            'Desarrollé un carrito para usuarios anónimos que se sincroniza con la cuenta: los productos se conservan al iniciar sesión o registrarse.',
            'Implementé control de acceso basado en roles (RBAC) para separar clientes minoristas y mayoristas, con precios y flujos de pedido distintos.',
            'Creé un panel de administración unificado para gestionar productos, SKUs, inventario, roles de usuario e imágenes en Cloudinary de las dos marcas.',
        ],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Prisma', 'JWT', 'Cloudinary', 'Vercel'],
        url: 'https://www.darccuir-yatay.com.ar',
        urlText: 'darccuir-yatay.com.ar',
        screenshots: {
            primary: {
                src: '/images/dy-catalog.png',
                alt: 'Catálogo de productos de Darc Cuir & Yatay',
            },
            secondary: {
                src: '/images/dy-product.png',
                alt: 'Detalle de producto de Darc Cuir & Yatay con selección de color y talle',
            },
        },
    },
]

// ─────────────────────────────────────────
// STACK GROUPS
// ─────────────────────────────────────────
export const stackGroups: StackGroup[] = [
    {
        label: 'Frontend',
        items: ['React', 'Next.js', 'Tailwind CSS', 'SCSS', 'HTML'],
    },
    {
        label: 'Backend',
        items: ['Node.js', 'Express.js', 'MongoDB', 'Prisma'],
    },
    {
        label: 'Herramientas e infraestructura',
        items: ['Git', 'JWT', 'APIs REST', 'Cloudinary', 'Vercel'],
    },
    {
        label: 'Diseño',
        items: ['Figma', 'Illustrator'],
    },
]
