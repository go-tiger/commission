'use client';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: '20px',
            fontWeight: 700,
          }}
        >
          마인크래프트 외주 개발
        </h1>
        <p
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            marginBottom: '30px',
            opacity: 0.95,
          }}
        >
          런처와 서버, 맞춤형 솔루션
        </p>
        <button
          onClick={scrollToContact}
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--accent-light)',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = 'var(--accent)';
            el.style.transform = 'translateY(-2px)';
            el.style.boxShadow = '0 6px 16px rgba(6, 182, 212, 0.4)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = 'var(--accent-light)';
            el.style.transform = 'translateY(0)';
            el.style.boxShadow = '0 4px 12px rgba(6, 182, 212, 0.3)';
          }}
        >
          지금 요청하기
        </button>
      </div>
    </section>
  );
}
