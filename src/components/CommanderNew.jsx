const CommanderNew = () => {
  const deliveryOptions = [
    {
      name: 'Uber Eats',
      logo: '🚗',
      url: '#'
    },
    {
      name: 'Deliveroo',
      logo: '🛵',
      url: '#'
    },
    {
      name: 'Click & Collect',
      logo: '🏪',
      url: 'https://matisse-food.marketplace.dood.com/fr'
    }
  ]

  return (
    <section
      id="commander"
      style={{
        padding: '120px 20px',
        backgroundColor: 'var(--blanc)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: '700',
          color: 'var(--vert-bouteille)',
          marginBottom: '80px',
          letterSpacing: '-1px'
        }}>
          COMMANDER
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {deliveryOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 40px',
                backgroundColor: 'var(--gris-clair)',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.backgroundColor = 'var(--vert-bouteille)'
                const text = e.currentTarget.querySelector('span')
                if (text) text.style.color = 'var(--blanc)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.backgroundColor = 'var(--gris-clair)'
                const text = e.currentTarget.querySelector('span')
                if (text) text.style.color = 'var(--vert-bouteille)'
              }}
            >
              <div style={{
                fontSize: '64px',
                marginBottom: '20px'
              }}>
                {option.logo}
              </div>
              <span style={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'var(--vert-bouteille)',
                transition: 'color 0.3s ease'
              }}>
                {option.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommanderNew
