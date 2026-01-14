const FooterNew = () => {
  return (
    <footer style={{
      padding: '60px 20px 40px',
      backgroundColor: 'var(--bg-dark)',
      borderTop: '1px solid var(--border-glass)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--vert-accent)',
              marginBottom: '10px',
              letterSpacing: '1px'
            }}>
              MATISSE
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-gray)',
              letterSpacing: '0.5px'
            }}>
              Street Food d'Exception
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            {['Facebook', 'Instagram', 'TikTok'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  color: 'var(--text-gray)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--vert-accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-gray)'}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(74, 222, 128, 0.1)',
          fontSize: '14px',
          color: 'var(--text-muted)',
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}>
          © 2024 Matisse Food. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

export default FooterNew
