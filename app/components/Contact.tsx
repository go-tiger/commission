'use client';

export default function Contact() {
  return (
    <section id='contact' style={{ padding: '120px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '20px' }}>
          지금 시작하세요
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '40px' }}>
          프로젝트 요청이나 문의사항이 있으신가요? 디스코드 커뮤니티에 참여해주세요!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '50px', flexWrap: 'wrap' }}>
          <a
            href='https://discord.gg/am48Cvufun'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              background: 'var(--accent)',
              color: '#08110d',
              padding: '16px 32px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '15px',
            }}
          >
            🔗 디스코드로 문의 →
          </a>
          <a
            href='mailto:dev.gotiger@gmail.com'
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              padding: '16px 32px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '15px',
            }}
          >
            이메일 보내기
          </a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>💬 Discord: gotiger_#7478</p>
      </div>
    </section>
  );
}
