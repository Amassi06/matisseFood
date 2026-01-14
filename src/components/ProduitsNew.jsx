const ProduitsNew = () => {
  const products = [
    {
      id: 1,
      name: 'Sandwichs & Bowls',
      image: '/images/menu1.jpg'
    },
    {
      id: 2,
      name: 'Tacos',
      image: '/images/menu2.jpg'
    },
    {
      id: 3,
      name: 'Smashs',
      image: '/images/menu3.jpg'
    },
    {
      id: 4,
      name: 'Tenders, Frites, Desserts & Boissons',
      image: '/images/menu4.jpg'
    }
  ]

  return (
    <section
      id="produits"
      style={{
        padding: '120px 20px',
        backgroundColor: 'var(--gris-clair)'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: '700',
          color: 'var(--vert-bouteille)',
          textAlign: 'center',
          marginBottom: '80px',
          letterSpacing: '-1px'
        }}>
          NOS PRODUITS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'var(--blanc)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.height = '400px'
                  e.target.style.backgroundColor = 'var(--gris-clair)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProduitsNew
