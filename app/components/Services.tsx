'use client';

const services = [
  {
    emoji: '🚀',
    title: '커스텀 런처',
    description: '모드 로더, 프로필 관리, 자동 업데이트 기능을 포함한 마인크래프트 커스텀 런처',
  },
  {
    emoji: '🖥️',
    title: '게임 서버',
    description: '게임 서버 구축, 성능 최적화 및 관리 제공',
  },
];

export default function Services() {
  return (
    <section id='services' style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ color: 'var(--accent)', fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '16px' }}>
          SERVICE
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, marginBottom: '20px' }}>서비스</h2>
        <div style={{ borderBottom: '1px solid var(--border)' }}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} idx={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ emoji, title, description, idx }: { emoji: string; title: string; description: string; idx: number }) {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 0',
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: '24px',
        alignItems: 'start',
      }}
    >
      <span style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 700 }}>0{idx}</span>
      <div>
        <h3 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>
          {emoji} {title}
        </h3>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '560px' }}>{description}</p>
      </div>
    </div>
  );
}
