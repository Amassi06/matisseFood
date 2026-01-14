const FooterNew = () => {
  return (
    <footer style={{
      padding: '60px 20px 40px',
      backgroundColor: 'var(--gris-clair)',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: '30px'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'var(--vert-bouteille)',
            marginBottom: '20px',
            letterSpacing: '-0.5px'
          }}>
            MATISSE
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'var(--noir)',
            opacity: 0.6,
            marginBottom: '20px'
          }}>
            matisse.contact@gmail.com
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {['Facebook', 'Instagram', 'TikTok'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  color: 'var(--vert-bouteille)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.6'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(27, 67, 50, 0.1)',
          fontSize: '14px',
          color: 'var(--noir)',
          opacity: 0.5
        }}>
          © 2024 Matisse Food
        </div>
      </div>
    </footer>
  )
}

export default FooterNew
