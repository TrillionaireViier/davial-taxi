export default function Drivers() {
  return (
    <main className="container section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 className="section-title">Drive with Prestige.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Join the Davial Taxi elite fleet. We offer industry-leading compensation, premium clientele, and flexible hours for owners of luxury vehicles.
          </p>
          <ul style={{ color: 'var(--accent-gold)', marginBottom: '2rem', listStyle: 'none' }}>
            <li style={{ marginBottom: '1rem' }}>✓ Minimum earnings guarantee</li>
            <li style={{ marginBottom: '1rem' }}>✓ VIP Client Network</li>
            <li style={{ marginBottom: '1rem' }}>✓ 24/7 Dedicated Partner Support</li>
          </ul>
        </div>
        <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '4px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '2rem' }}>Apply Now</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Vehicle Class</option>
                <option value="business">Business (E-Class or similar)</option>
                <option value="first">First Class (S-Class or similar)</option>
                <option value="suv">Premium SUV (Escalade or similar)</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit Application</button>
          </form>
        </div>
      </div>
    </main>
  );
}
