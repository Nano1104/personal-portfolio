'use client'

import { motion } from 'framer-motion'
import { personal, stackGroups } from '@/lib/data'
import { fadeUp, stagger, viewport } from '@/lib/motion'

export function About() {
    const container = stagger(0.1)

    return (
        <section
            id="about"
            aria-label="About"
            className="about-section"
        >
            <div className="section-label">About</div>

            <div
                className="about-grid"
            >
                {/* Bio */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                >
                    {personal.bio.map((paragraph, i) => (
                        <p
                            key={i}
                            className="about-bio"
                            dangerouslySetInnerHTML={{
                                __html: paragraph
                                    .replace(/self-taught fullstack developer/g, '<strong style="color:var(--t1);font-weight:400">self-taught fullstack developer</strong>')
                                    .replace(/real-world business problems/g, '<strong style="color:var(--t1);font-weight:400">real-world business problems</strong>')
                                    .replace(/code quality/g, '<strong style="color:var(--t1);font-weight:400">code quality</strong>'),
                            }}
                        />
                    ))}
                </motion.div>

                {/* Stack */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="about-stack"
                >
                    {stackGroups.map(group => (
                        <motion.div key={group.label} variants={fadeUp}>
                            <p
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '10px',
                                    color: 'var(--t2)',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    marginBottom: '10px',
                                }}
                            >
                                {group.label}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                                {group.items.map(item => (
                                    <StackItem key={item}>{item}</StackItem>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function StackItem({ children }: { children: React.ReactNode }) {
    return (
        <span
            style={{
                padding: '4px 12px',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                fontSize: '12px',
                color: 'var(--t2)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em',
                transition: 'border-color 0.2s, color 0.2s',
                cursor: 'default',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-m)'
                e.currentTarget.style.color = 'var(--t1)'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--t2)'
            }}
        >
            {children}
        </span>
    )
}
