export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center',
        padding: '40px 0',
        marginTop: '80px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <p>&copy; 2024 마인크래프트 커스텀 런처. 모든 권리 예약.</p>
      </div>
    </footer>
  );
}
