'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { personal } from '@/lib/data'

const NAV_LINKS = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

export function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    /* ── Scroll detection ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* ── Lock body scroll when mobile menu is open ── */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    /* ── Close on Escape key ── */
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const close = () => setMenuOpen(false)
    const toggle = () => setMenuOpen(prev => !prev)

    return (
        <>
            {/* ── Fixed header bar ── */}
            <header className={`nav-header${scrolled ? ' nav-scrolled' : ''}`}>
                {/* Logo — above mobile overlay (z-index: 101) */}
                <Link href="/" className="nav-logo" onClick={close}>
                    {personal.shortName}
                </Link>

                {/* Desktop navigation */}
                <nav className="nav-desktop" aria-label="Main navigation">
                    <ul>
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={label}>
                                <a href={href} className="nav-link">{label}</a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noreferrer"
                                className="nav-cta"
                                aria-label="GitHub profile (opens in new tab)"
                            >
                                GitHub ↗
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger — visible only on mobile via CSS */}
                <button
                    className="nav-hamburger"
                    onClick={toggle}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    {menuOpen ? <XIcon /> : <HamburgerIcon />}
                </button>
            </header>

            {/* ── Mobile full-screen overlay ── */}
            <div
                id="mobile-menu"
                className={`mobile-menu${menuOpen ? ' open' : ''}`}
                aria-hidden={!menuOpen}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <nav aria-label="Mobile navigation">
                    {NAV_LINKS.map(({ label, href }, i) => (
                        <a
                            key={label}
                            href={href}
                            className="mobile-nav-link"
                            onClick={close}
                            tabIndex={menuOpen ? 0 : -1}
                            style={{
                                /* Stagger each link's entrance */
                                transitionDelay: menuOpen ? `${i * 0.04}s` : '0s',
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Bottom meta info */}
                <div className="mobile-menu-meta">
                    <span>{personal.email}</span>
                    <span>{personal.location}</span>
                </div>
            </div>
        </>
    )
}

/* ── Icon components ── */
function HamburgerIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            <rect x="2" y="5.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
            <rect x="2" y="10.25" width="18" height="1.5" rx="0.75" fill="currentColor" />
            <rect x="2" y="15" width="18" height="1.5" rx="0.75" fill="currentColor" />
        </svg>
    )
}

function XIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M4.5 4.5L17.5 17.5M17.5 4.5L4.5 17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}
