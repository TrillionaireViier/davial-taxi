export default function UserDashboard() {
  return (
    <main className="container section">
      <h2 className="section-title">My Rides</h2>
      <p style={{ color: 'var(--text-muted)' }}>Welcome back. Here you can manage your bookings.</p>
      
      <div style={{ background: 'var(--bg-card)', padding: '2rem', marginTop: '3rem' }}>
        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Active Bookings</h3>
        <p style={{ color: 'var(--text-muted)' }}>You have no active bookings at this time.</p>
        
        <br/>
        <a href="/" className="btn btn-primary">Book a new Ride</a>
      </div>
    </main>
  );
}
