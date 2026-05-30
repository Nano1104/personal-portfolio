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
    github: string
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
    role: 'Fullstack Developer',
    location: 'Buenos Aires, Argentina',
    email: 'marianogil2004@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mariano-gil/',
    github: 'https://github.com/Nano1104',
    headline: 'Fullstack developer building production web applications that real businesses rely on.',
    tagline: 'From complex inventory systems to authenticated e-commerce platforms.',
    bio: [
        "I'm a self-taught fullstack developer based in Buenos Aires. I build complete web products — from database design and API architecture to deployed, production-ready frontends — using React, Next.js, and Node.js.",
        "My work focuses on real-world business problems: inventory systems that replace manual spreadsheets, e-commerce platforms with complex authentication flows, and admin tooling that non-technical teams can actually use. I've shipped two production applications with real customers and real orders.",
        "I work precisely, communicate clearly, and care about both code quality and the experience the end user actually gets. Open to fullstack and frontend roles — remote or in Buenos Aires.",
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
        type: 'B2B Platform',
        title: ['Inventory Management', 'Platform'],
        description:
            'SW Autoparts needed to move their entire parts catalog — previously managed in Excel spreadsheets — into a searchable, filterable web platform. The system handles 2,100+ SKUs with multi-criteria filtering, category navigation, and a reservation flow.',
        challenge:
            'Building a search and filter engine across 2,100+ products — spanning dozens of brands, categories, and price ranges — that feels instant without relying on any paid search service.',
        highlights: [
            'Designed and built RESTful APIs covering the full inventory lifecycle: products, categories, stock, and reservation orders',
            'Implemented multi-criteria filtering (brand, price range, category) with breadcrumb navigation across a 2,100+ item catalog',
            'Built a reservation system allowing customers to place orders before payment confirmation, with a live consultation panel',
        ],
        stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Render'],
        url: 'https://www.swautoparts.com',
        github: 'https://github.com/Nano1104/general-parts',
        urlText: 'swautoparts.com',
        screenshots: {
            primary: {
                // Put your screenshot in /public/images/sw-catalog.png
                src: '/images/sw-home.png',
                alt: 'SW Autoparts product catalog with filters',
            },
            secondary: {
                // Put your screenshot in /public/images/sw-product.png
                src: '/images/sw-catalog.png',
                alt: 'SW Autoparts product detail page',
            },
        },
    },
    {
        id: '02',
        client: 'Darc Cuir & Yatay',
        year: '2025',
        type: 'E-commerce Platform',
        title: ['Dual-Brand', 'E-commerce'],
        description:
            'Two leather goods brands under one factory needed a complete rebuild from a failing legacy site. The result: a shared platform with independent storefronts, authenticated ordering, and a unified admin panel managing both brands from a single interface.',
        challenge:
            'Anonymous cart persistence — users needed to browse and add items without logging in, then have their cart state seamlessly merge into their authenticated session without data loss or duplication.',
        highlights: [
            'Built anonymous cart system with full session-to-auth synchronization — cart items persist across the login/signup flow',
            'Implemented role-based access control (RBAC) separating retail and wholesale customers with different pricing and order flows',
            'Created a unified admin panel managing products, SKUs, inventory, user roles, and Cloudinary images for two independent brands',
        ],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Prisma', 'JWT', 'Cloudinary', 'Vercel'],
        url: 'https://www.darccuir-yatay.com.ar',
        github: 'https://github.com/Kainos-dev/darccuiryatay-fullstack-web',
        urlText: 'darccuir-yatay.com.ar',
        screenshots: {
            primary: {
                src: '/images/dy-catalog.png',
                alt: 'Darc Cuir & Yatay product catalog',
            },
            secondary: {
                src: '/images/dy-product.png',
                alt: 'Darc Cuir & Yatay product detail with color and size selectors',
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
        label: 'Tools & Infra',
        items: ['Git', 'JWT', 'REST APIs', 'Cloudinary', 'Vercel'],
    },
    {
        label: 'Design',
        items: ['Figma', 'Illustrator'],
    },
]
