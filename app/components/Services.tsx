'use client';

const services = [
  {
    emoji: '🎮',
    title: '커스텀 런처',
    description: '모드 로더, 프로필 관리, 자동 업데이트 기능을 포함한 고급 게임 런처',
  },
  {
    emoji: '🌍',
    title: '게임 서버',
    description: '안정적인 게임 서버 구축, 플러그인 설정, 성능 최적화 및 관리 제공',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '80px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2
          style={{
            fontSize: '36px',
            marginBottom: '50px',
            textAlign: 'center',
            color: 'var(--text-primary)',
            position: 'relative',
          }}
        >
          제공 서비스
          <span
            style={{
              display: 'block',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent) 0%, var(--success) 100%)',
              margin: '15px auto 0',
              borderRadius: '2px',
            }}
          />
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--success) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '18px',
        }}
      >
        {emoji} {title}
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{description}</p>
      </div>
    </div>
  );
}
