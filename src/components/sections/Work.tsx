'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects, type Project } from '@/lib/data'
import { fadeUp, stagger, viewport } from '@/lib/motion'
import { useState } from 'react'

// ─────────────────────────────────────────
// Browser mockup with real screenshots
// ─────────────────────────────────────────
function ProjectMockup({ project }: { project: Project }) {
    const { screenshots, urlText } = project
    const [primaryError, setPrimaryError] = useState(false)
    const [secondaryError, setSecondaryError] = useState(false)

    return (
        <div
            style={{
                margin: '0 52px 52px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
            }}
        >
            {/* Browser chrome */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '10px 16px',
                    borderBottom: '1px solid var(--border)',
                    background: 'var(--bg-3)',
                }}
            >
                {['#FF5F56', '#FFBD2E', '#27C93F'].map(color => (
                    <span
                        key={color}
                        aria-hidden="true"
                        style={{ width: '10px', height: '10px', borderRadius: '50%', background: color }}
                    />
                ))}
                <span
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--t3)',
                        letterSpacing: '0.03em',
                    }}
                >
                    {urlText}
                </span>
            </div>

            {/* Screenshot strip — primary (62%) + secondary (38%) */}
            <div
                style={{
                    height: '220px',
                    display: 'flex',
                    background: 'var(--bg-2)',
                }}
            >
                {/* Primary screenshot */}
                <div
                    style={{
                        flex: '0 0 62%',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRight: '1px solid var(--border)',
                    }}
                >
                    {!primaryError ? (
                        <Image
                            src={screenshots.primary.src}
                            alt={screenshots.primary.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 620px"
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            onError={() => setPrimaryError(true)}
                            // Priority on the first project only — it's likely above the fold
                            priority={project.id === '01'}
                        />
                    ) : (
                        <Placeholder label={screenshots.primary.alt} />
                    )}
                </div>

                {/* Secondary screenshot */}
                <div
                    style={{
                        flex: '0 0 38%',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {!secondaryError ? (
                        <Image
                            src={screenshots.secondary.src}
                            alt={screenshots.secondary.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 380px"
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            onError={() => setSecondaryError(true)}
                        />
                    ) : (
                        <Placeholder label={screenshots.secondary.alt} />
                    )}
                </div>
            </div>
        </div>
    )
}

// Fallback shown when an image hasn't been added yet
function Placeholder({ label }: { label: string }) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                background: 'var(--bg-3)',
            }}
        >
            <span
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--t3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                }}
            >
                Add screenshot
            </span>
            <span style={{ fontSize: '9px', color: 'var(--t3)', opacity: 0.5 }}>
                {label}
            </span>
        </div>
    )
}

// ─────────────────────────────────────────
// Single project card
// ─────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.article
            variants={fadeUp}
            style={{
                border: '1px solid var(--border)',
                borderRadius: '10px',
                overflow: 'hidden',
                background: 'var(--bg-2)',
                marginBottom: '20px',
                transition: 'border-color 0.3s',
            }}
            whileHover={{ borderColor: 'var(--border-m)' }}
            aria-label={`Project: ${project.client}`}
        >
            {/* Case study body */}
            <div
                style={{
                    padding: '52px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '56px',
                    alignItems: 'start',
                }}
            >
                {/* LEFT — identity + description + links */}
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            color: 'var(--t3)',
                            letterSpacing: '0.08em',
                            marginBottom: '20px',
                        }}
                    >
                        {project.id}
                        <Badge>{project.type}</Badge>
                        <Badge>{project.year}</Badge>
                    </div>

                    <h3
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(30px, 3.5vw, 46px)',
                            fontWeight: 300,
                            lineHeight: 1.05,
                            letterSpacing: '-0.025em',
                            color: 'var(--t1)',
                            marginBottom: '12px',
                        }}
                    >
                        {project.title[0]}
                        <br />
                        {project.title[1]}
                    </h3>

                    <p
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            color: 'var(--accent)',
                            letterSpacing: '0.05em',
                            marginBottom: '20px',
                        }}
                    >
                        {project.client}
                    </p>

                    <p
                        style={{
                            fontSize: '14px',
                            color: 'var(--t2)',
                            lineHeight: 1.72,
                            marginBottom: '32px',
                        }}
                    >
                        {project.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <TextLink href={project.url} external primary>
                            ↗ Live site
                        </TextLink>
                        <TextLink href={project.github} external>
                            GitHub →
                        </TextLink>
                    </div>
                </div>

                {/* RIGHT — challenge + highlights + stack */}
                <div>
                    <p
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            color: 'var(--t3)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '10px',
                        }}
                    >
                        Technical Challenge
                    </p>

                    <p
                        style={{
                            fontSize: '14px',
                            color: 'var(--t2)',
                            lineHeight: 1.72,
                            paddingLeft: '16px',
                            borderLeft: '1px solid var(--accent-border)',
                            marginBottom: '28px',
                        }}
                    >
                        {project.challenge}
                    </p>

                    <ul style={{ listStyle: 'none', marginBottom: '28px' }}>
                        {project.highlights.map((h, i) => (
                            <li
                                key={i}
                                style={{
                                    display: 'flex',
                                    gap: '11px',
                                    marginBottom: '12px',
                                }}
                            >
                                <span
                                    aria-hidden="true"
                                    style={{
                                        width: '4px',
                                        height: '4px',
                                        borderRadius: '50%',
                                        background: 'var(--accent)',
                                        flexShrink: 0,
                                        marginTop: '7px',
                                    }}
                                />
                                <span style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.6 }}>
                                    {h}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {project.stack.map(tag => (
                            <span
                                key={tag}
                                style={{
                                    padding: '3px 11px',
                                    background: 'var(--accent-bg)',
                                    border: '1px solid var(--accent-border)',
                                    borderRadius: '100px',
                                    fontSize: '11px',
                                    color: 'var(--accent)',
                                    fontFamily: 'var(--font-mono)',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Screenshots */}
            <ProjectMockup project={project} />
        </motion.article>
    )
}

// ─────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span
            style={{
                padding: '2px 9px',
                border: '1px solid var(--border-m)',
                borderRadius: '100px',
                fontSize: '10px',
                color: 'var(--t2)',
                letterSpacing: '0.04em',
            }}
        >
            {children}
        </span>
    )
}

function TextLink({
    href,
    children,
    external,
    primary,
}: {
    href: string
    children: React.ReactNode
    external?: boolean
    primary?: boolean
}) {
    return (
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: primary ? 'var(--t1)' : 'var(--t2)',
                textDecoration: 'none',
                letterSpacing: '0.03em',
                transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e =>
                (e.currentTarget.style.color = primary ? 'var(--t1)' : 'var(--t2)')
            }
        >
            {children}
        </a>
    )
}

// ─────────────────────────────────────────
// Work section
// ─────────────────────────────────────────
export function Work() {
    const container = stagger(0.12)

    return (
        <section
            id="work"
            aria-label="Selected Work"
            style={{ padding: '112px 40px', maxWidth: 'var(--max-w)', margin: '0 auto' }}
        >
            <div className="section-label">Selected Work</div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
            >
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </motion.div>
        </section>
    )
}
