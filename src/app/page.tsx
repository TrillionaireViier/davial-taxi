import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1
        }}></div>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 100%)'
        }}></div>
        
        <div className="container" style={{ zIndex: 1 }}>
          <h1 className="section-title" style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>Arrive in <em style={{ color: 'var(--accent-gold)' }}>Elegance</em>.</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px' }}>
            The premium chauffeur and taxi service for those who value time and comfort.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/login" className="btn btn-primary">Book Now</Link>
            <Link href="/drivers" className="btn btn-outline">Become a Driver</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title text-center">Uncompromising Quality</h2>
        <p className="section-subtitle text-center">Whether it's an airport transfer or a business meeting, we ensure perfection.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: '✈️', title: 'Airport Transfers', desc: 'Punctual, stress-free rides with flight tracking.' },
            { icon: '👔', title: 'Corporate Travel', desc: 'Dedicated accounts for business professionals.' },
            { icon: '✨', title: 'Special Events', desc: 'Make your weddings and galas memorable.' }
          ].map((s, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', padding: '4rem 3rem', borderTop: '2px solid transparent' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
