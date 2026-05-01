'use client';

export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%)',
        color: 'white',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-1px' }}>
            ⚙️ 고랑
          </div>
          <nav className="hidden sm:flex">
            {[
              { label: '서비스', id: 'services' },
              { label: '포트폴리오', id: 'portfolio' },
              { label: '문의', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  marginLeft: '2rem',
                  fontSize: '14px',
                  opacity: 0.9,
                  cursor: 'pointer',
                  transition: 'opacity 0.3s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.9')}
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
