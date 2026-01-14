const HistoireNew = () => {
  return (
    <section
      id="histoire"
      style={{
        padding: '120px 20px',
        backgroundColor: 'var(--blanc)',
        textAlign: 'center'
      }}
    >
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: '700',
          color: 'var(--vert-bouteille)',
          marginBottom: '40px',
          letterSpacing: '-1px'
        }}>
          Inspiré par l'art de Matisse
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          fontWeight: '300',
          color: 'var(--noir)',
          lineHeight: '1.6',
          opacity: 0.8
        }}>
          Une expérience culinaire qui allie créativité et qualité.
          <br />
          Nos produits sont préparés avec des ingrédients frais et locaux.
        </p>
      </div>
    </section>
  )
}

export default HistoireNew
