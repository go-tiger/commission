'use client';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        padding: '140px 0 100px',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h1
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '32px',
          }}
        >
          마인크래프트<br />외주 개발
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            marginBottom: '40px',
          }}
        >
          런처와 서버, 맞춤형 솔루션
        </p>
        <button
          onClick={scrollToContact}
          style={{
            background: 'var(--accent)',
            color: '#08110d',
            padding: '16px 36px',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '15px',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          지금 요청하기 →
        </button>
      </div>
    </section>
  );
}
