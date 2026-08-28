export default function AdminDashboard() {
  return (
    <main className="container section">
      <h2 className="section-title">Admin Dashboard</h2>
      <p style={{ color: 'var(--text-muted)' }}>Manage your premium fleet, drivers, and user bookings.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
        <div style={{ background: 'var(--bg-card)', padding: '2rem' }}>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Recent Bookings</h3>
          <table>
            <thead>
              <tr><th>User</th><th>Route</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>john@doe.com</td><td>JFK Airport</td><td>Pending</td></tr>
              <tr><td>jane@smith.com</td><td>Downtown Hotel</td><td>Completed</td></tr>
            </tbody>
          </table>
        </div>
        
        <div style={{ background: 'var(--bg-card)', padding: '2rem' }}>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Driver Applications</h3>
          <table>
            <thead>
              <tr><th>Name</th><th>Vehicle</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr><td>Alex P.</td><td>Mercedes S-Class</td><td><button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}>Approve</button></td></tr>
              <tr><td>Sarah W.</td><td>Cadillac Escalade</td><td><button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}>Approve</button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
