'use client';

export default function Contact() {
  return (
    <section id='contact' style={{ padding: '80px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2
          style={{
            fontSize: '36px',
            marginBottom: '25px',
            textAlign: 'center',
            color: 'var(--text-primary)',
            fontWeight: 700,
          }}
        >
          문의하기
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
            maxWidth: '600px',
            margin: '0 auto',
            background: 'var(--surface)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            textAlign: 'center',
          }}
        >
          <p style={{ marginBottom: '20px', fontSize: '16px', color: 'var(--text-secondary)' }}>
            프로젝트 요청이나 문의사항이 있으신가요?
            <br />
            디스코드 커뮤니티에 참여해주세요!
          </p>
          <a
            href='https://discord.gg/am48Cvufun'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--accent-light)',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '18px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.backgroundColor = 'var(--accent)';
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 6px 16px rgba(6, 182, 212, 0.4)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.backgroundColor = 'var(--accent-light)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 12px rgba(6, 182, 212, 0.3)';
            }}
          >
            🔗 디스코드 참여하기
          </a>
          <div
            style={{
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border)',
            }}
          >
            <h3 style={{ marginBottom: '15px', color: 'var(--text-primary)' }}>서비스 문의</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>📧 Email: dev.gotiger@gmail.com</p>
            <p style={{ color: 'var(--text-secondary)' }}>💬 Discord: gotiger_#7478</p>
          </div>
        </div>
      </div>
    </section>
  );
}
