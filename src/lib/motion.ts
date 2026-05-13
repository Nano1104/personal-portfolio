// ─────────────────────────────────────────────────────────────────
// lib/motion.ts
// Centralized animation variants for Framer Motion.
// Import these instead of defining inline — keeps animations
// consistent and easy to adjust globally.
// ─────────────────────────────────────────────────────────────────

export const EASE = [0.16, 1, 0.3, 1] as const

// Fade up — used for most scroll-reveal elements
export const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

// Fade in only — used for elements where Y movement would be odd
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
}

// Stagger container — wraps a list of children that should animate sequentially
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
})

// Hero sequence — slightly longer, used for above-the-fold load
export const heroItem = (delay = 0) => ({
    hidden: { opacity: 0, y: 14 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE, delay },
    },
})

// Viewport config — shared across all scroll-triggered animations
export const viewport = {
    once: true,
    margin: '-60px',
} as const
