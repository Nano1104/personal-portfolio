'use client'

import { motion } from 'framer-motion'
import { personal } from '@/lib/data'
import { fadeUp, viewport } from '@/lib/motion'

const links = [
    { label: `✉ ${personal.email}`, href: `mailto:${personal.email}` },
    { label: '↗ LinkedIn', href: personal.linkedin, external: true },
    { label: '↗ GitHub', href: personal.github, external: true },
]

export function Contact() {
    return (
        <section
            id="contact"
            aria-label="Contact"
            style={{ padding: '112px 40px', maxWidth: 'var(--max-w)', margin: '0 auto' }}
        >
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                style={{ textAlign: 'center' }}
            >
                <h2
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(44px, 6.5vw, 84px)',
                        fontWeight: 300,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.05,
                        color: 'var(--t1)',
                        marginBottom: '24px',
                    }}
                >
                    Let&apos;s work
                    <br />
                    <em style={{ fontStyle: 'italic', color: 'var(--t2)' }}>together.</em>
                </h2>

                <p
                    style={{
                        fontSize: '15px',
                        color: 'var(--t2)',
                        maxWidth: '400px',
                        margin: '0 auto 48px',
                        lineHeight: 1.65,
                    }}
                >
                    Open to fullstack and frontend roles — remote or Buenos Aires.
                    Freelance projects welcome.
                </p>

                <nav aria-label="Contact links">
                    <ul
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '36px',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                        }}
                    >
                        {links.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noreferrer' : undefined}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '7px',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '12px',
                                        color: 'var(--t2)',
                                        textDecoration: 'none',
                                        letterSpacing: '0.04em',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--t2)')}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </section>
    )
}
