import { personal } from '@/lib/data'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
            style={{
                borderTop: '1px solid var(--border)',
                padding: '28px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
            }}
        >
            <span
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--t3)',
                    letterSpacing: '0.04em',
                }}
            >
                {personal.shortName} — {year}
            </span>
            <span
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--t3)',
                    letterSpacing: '0.04em',
                }}
            >
                Built with Next.js · Deployed on Vercel
            </span>
        </footer>
    )
}
