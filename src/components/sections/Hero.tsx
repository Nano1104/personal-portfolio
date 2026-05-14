'use client'

import { motion } from 'framer-motion'
import { personal } from '@/lib/data'
import { heroItem, stagger } from '@/lib/motion'

const LINKS = [
    { label: 'View Work →', href: '#work', external: false, primary: true },
    { label: 'LinkedIn ↗', href: personal.linkedin, external: true, primary: false },
    { label: 'GitHub ↗', href: personal.github, external: true, primary: false },
]

const META_ITEMS = [
    'React · Next.js · Node.js',
    'Open to remote',
    '2 live client projects',
]

export function Hero() {
    const container = stagger(0.14, 0)

    return (
        /*
         * hero-section → defined in globals.css
         * Handles padding at every breakpoint:
         *   desktop  → 110px 40px 80px
         *   lg       → 100px 28px 72px
         *   md       → 88px  20px 60px
         *   sm       → same as md
         *   xs       → 80px  16px 52px
         */
        <section className="hero-section" aria-label="Introduction">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', flexDirection: 'column' }}
            >

                {/* ── Status badge ── */}
                <motion.div
                    variants={heroItem(0)}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--t2)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '40px',
                    }}
                >
                    <span
                        aria-hidden="true"
                        style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: '#4ADE80',
                            boxShadow: '0 0 10px rgba(74,222,128,0.45)',
                            animation: 'pulse-dot 2.5s ease infinite',
                            flexShrink: 0,
                        }}
                    />
                    {/* On xs screens the text wraps naturally — no truncation needed */}
                    Available for work · {personal.location}
                </motion.div>

                {/* ── Name ── */}
                <motion.h1
                    variants={heroItem(0.1)}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        /*
                         * clamp(min, preferred, max)
                         * 8.5vw hits 100px at ~1176px viewport.
                         * On a 390px phone this renders at ~33px — too small.
                         * Using 54px floor ensures readability on all phones.
                         */
                        fontSize: 'clamp(54px, 8.5vw, 100px)',
                        fontWeight: 300,
                        lineHeight: 1.0,
                        letterSpacing: '-0.03em',
                        color: 'var(--t1)',
                        marginBottom: '28px',
                    }}
                >
                    Mariano
                    <br />
                    <em style={{ fontStyle: 'italic', color: 'var(--t2)' }}>Nicolas Gil</em>
                </motion.h1>

                {/* ── Tagline ── */}
                <motion.p
                    variants={heroItem(0.2)}
                    style={{
                        fontSize: 'clamp(15px, 1.8vw, 20px)',
                        fontWeight: 300,
                        color: 'var(--t2)',
                        /*
                         * maxWidth caps the line length on large screens.
                         * On mobile it naturally fills the container.
                         */
                        maxWidth: '500px',
                        lineHeight: 1.65,
                        marginBottom: '52px',
                    }}
                >
                    Fullstack developer building{' '}
                    <strong style={{ color: 'var(--t1)', fontWeight: 400 }}>
                        production web applications
                    </strong>{' '}
                    that real businesses rely on — from inventory systems to
                    authenticated e-commerce platforms.
                </motion.p>

                {/* ── CTAs ── */}
                <motion.div
                    variants={heroItem(0.32)}
                    /*
                     * hero-cta-group → globals.css
                     * Desktop:  flex-row, items wrap
                     * sm ≤640px: flex-column, buttons stretch full width
                     */
                    className="hero-cta-group"
                >
                    {LINKS.map(({ label, href, external, primary }) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noreferrer' : undefined}
                            className={primary ? 'hero-cta-primary' : 'hero-cta-secondary'}
                        >
                            {label}
                        </a>
                    ))}
                </motion.div>

                {/* ── Meta strip ── */}
                <motion.div
                    variants={heroItem(0.44)}
                    /*
                     * hero-meta → globals.css
                     * sm ≤640px: separators hidden, items wrap more tightly
                     */
                    className="hero-meta"
                >
                    {META_ITEMS.map((item, i) => (
                        <span
                            key={item}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '20px' }}
                        >
                            {/*
               * Separator — hidden on sm via .hero-meta-sep { display: none }
               * Avoids orphaned separators when items wrap to new line
               */}
                            {i > 0 && (
                                <span aria-hidden="true" className="hero-meta-sep" />
                            )}
                            <span className="hero-meta-item" style={{color: "var(--t2)"}}>{item}</span>
                        </span>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}
