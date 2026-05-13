'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { personal } from '@/lib/data'

export function Nav() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 100,
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 40px',
                transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
                borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
                background: scrolled ? 'rgba(12,12,10,0.82)' : 'transparent',
                backdropFilter: scrolled ? 'blur(24px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
            }}
        >
            {/* Logo */}
            <Link
                href="/"
                style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 300,
                    fontSize: '17px',
                    color: 'var(--t1)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                }}
            >
                {personal.shortName}
            </Link>

            {/* Navigation links */}
            <nav aria-label="Main navigation">
                <ul
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '28px',
                        listStyle: 'none',
                    }}
                >
                    {[
                        { label: 'Work', href: '#work' },
                        { label: 'About', href: '#about' },
                        { label: 'Contact', href: '#contact' },
                    ].map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                style={{
                                    color: 'var(--t2)',
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                    letterSpacing: '0.01em',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--t1)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--t2)')}
                            >
                                {label}
                            </a>
                        </li>
                    ))}

                    {/* GitHub CTA */}
                    <li>
                        <a
                            href={personal.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                padding: '6px 14px',
                                border: '1px solid var(--border-m)',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                letterSpacing: '0.04em',
                                color: 'var(--t2)',
                                textDecoration: 'none',
                                transition: 'border-color 0.2s, color 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--accent-border)'
                                e.currentTarget.style.color = 'var(--accent)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border-m)'
                                e.currentTarget.style.color = 'var(--t2)'
                            }}
                        >
                            GitHub ↗
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
