const RestaurantsNew = () => {
  const restaurants = [
    {
      name: 'Paris 14ème',
      address: '60 avenue du General Leclerc',
      city: '75014 Paris',
      phone: '01 45 42 54 99'
    },
    {
      name: 'Ivry-sur-Seine',
      address: '10 bis rue Barbès',
      city: '94200 Ivry-sur-Seine',
      phone: '01 45 21 01 37'
    }
  ]

  return (
    <section
      id="restaurants"
      style={{
        padding: '120px 20px',
        backgroundColor: 'var(--vert-bouteille)',
        color: 'var(--blanc)'
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
          color: 'var(--blanc)',
          marginBottom: '80px',
          letterSpacing: '-1px'
        }}>
          NOS RESTAURANTS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              style={{
                padding: '50px 40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--blanc)'
              }}>
                {restaurant.name}
              </h3>
              <p style={{
                fontSize: '18px',
                fontWeight: '300',
                lineHeight: '1.8',
                opacity: 0.9,
                marginBottom: '8px'
              }}>
                {restaurant.address}
              </p>
              <p style={{
                fontSize: '18px',
                fontWeight: '300',
                lineHeight: '1.8',
                opacity: 0.9,
                marginBottom: '20px'
              }}>
                {restaurant.city}
              </p>
              <p style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--blanc)'
              }}>
                {restaurant.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RestaurantsNew
