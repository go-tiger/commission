'use client';

export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        padding: '1.2rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px' }}>
            고랑<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
          <nav className="hidden sm:flex" style={{ gap: '2.5rem' }}>
            {[
              { label: '서비스', id: 'services' },
              { label: '포트폴리오', id: 'portfolio' },
              { label: '문의', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  color: 'var(--text-secondary)',
                  background: 'none',
                  border: 'none',
                  marginLeft: '2.5rem',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
