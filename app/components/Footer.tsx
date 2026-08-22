export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        color: 'var(--text-secondary)',
        textAlign: 'center',
        padding: '25px 0',
        fontSize: '13px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p>&copy; 2026 고랑. All rights reserved.</p>
      </div>
    </footer>
  );
}
