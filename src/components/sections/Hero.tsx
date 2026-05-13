'use client'

import { motion } from 'framer-motion'
import { personal } from '@/lib/data'
import { heroItem, stagger } from '@/lib/motion'

export function Hero() {
    const container = stagger(0.14, 0)

    return (
        <section
            aria-label="Introduction"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '110px 40px 80px',
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
            }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {/* Status badge */}
                <motion.div
                    variants={heroItem(0)}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--t3)',
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
                    Available for work · {personal.location}
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={heroItem(0.1)}
                    style={{
                        fontFamily: 'var(--font-serif)',
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

                {/* Tagline */}
                <motion.p
                    variants={heroItem(0.2)}
                    style={{
                        fontSize: 'clamp(16px, 1.8vw, 20px)',
                        fontWeight: 300,
                        color: 'var(--t2)',
                        maxWidth: '500px',
                        lineHeight: 1.65,
                        marginBottom: '52px',
                    }}
                >
                    Fullstack developer building{' '}
                    <strong style={{ color: 'var(--t1)', fontWeight: 400 }}>
                        production web applications
                    </strong>{' '}
                    that real businesses rely on — from inventory systems to authenticated
                    e-commerce platforms.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={heroItem(0.32)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        flexWrap: 'wrap',
                        marginBottom: '72px',
                    }}
                >
                    <a
                        href="#work"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '7px',
                            padding: '11px 22px',
                            background: 'var(--accent)',
                            color: '#0C0C0A',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '13px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            borderRadius: '4px',
                            transition: 'opacity 0.2s, transform 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.opacity = '0.86'
                            e.currentTarget.style.transform = 'translateY(-1px)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.opacity = '1'
                            e.currentTarget.style.transform = 'translateY(0)'
                        }}
                    >
                        View Work →
                    </a>

                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '7px',
                            padding: '11px 22px',
                            border: '1px solid var(--border-m)',
                            color: 'var(--t2)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '13px',
                            fontWeight: 400,
                            textDecoration: 'none',
                            borderRadius: '4px',
                            transition: 'border-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--border-s)'
                            e.currentTarget.style.color = 'var(--t1)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'var(--border-m)'
                            e.currentTarget.style.color = 'var(--t2)'
                        }}
                    >
                        LinkedIn ↗
                    </a>

                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '7px',
                            padding: '11px 22px',
                            border: '1px solid var(--border-m)',
                            color: 'var(--t2)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '13px',
                            fontWeight: 400,
                            textDecoration: 'none',
                            borderRadius: '4px',
                            transition: 'border-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--border-s)'
                            e.currentTarget.style.color = 'var(--t1)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'var(--border-m)'
                            e.currentTarget.style.color = 'var(--t2)'
                        }}
                    >
                        GitHub ↗
                    </a>
                </motion.div>

                {/* Meta */}
                <motion.div
                    variants={heroItem(0.44)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        'React · Next.js · Node.js',
                        'Open to remote',
                        '2 live client projects',
                    ].map((item, i) => (
                        <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '20px' }}>
                            {i > 0 && (
                                <span
                                    aria-hidden="true"
                                    style={{ width: '1px', height: '12px', background: 'var(--border-m)' }}
                                />
                            )}
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '12px',
                                    color: 'var(--t3)',
                                    letterSpacing: '0.04em',
                                }}
                            >
                                {item}
                            </span>
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Pulse animation for the status dot */}
            <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(74,222,128,0.45); }
          50%       { opacity: 0.65; box-shadow: 0 0 20px rgba(74,222,128,0.2); }
        }
      `}</style>
        </section>
    )
}
