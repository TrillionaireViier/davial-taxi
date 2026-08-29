export default function Drivers() {
  return (
    <main className="container section">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div>
          <h2 className="section-title">Drive with Prestige.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            At Davial Taxi, we believe our drivers are the heart of our premium experience. We are looking for professional, experienced, and courteous chauffeurs to partner with us and elevate every journey for our discerning clientele.
          </p>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>Why Partner with Us?</h3>
          <ul style={{ color: 'var(--accent-gold)', marginBottom: '2rem', listStyle: 'none' }}>
            <li style={{ marginBottom: '1rem' }}>✓ <strong>Premium Earnings:</strong> Earn higher rates per trip compared to standard platforms.</li>
            <li style={{ marginBottom: '1rem' }}>✓ <strong>Exclusive Clientele:</strong> Drive corporate executives and VIPs.</li>
            <li style={{ marginBottom: '1rem' }}>✓ <strong>Flexible Schedule:</strong> Work when you want, where you want.</li>
            <li style={{ marginBottom: '1rem' }}>✓ <strong>Driver Support:</strong> 24/7 dedicated partner support team.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>Requirements</h3>
          <ul style={{ color: 'var(--text-muted)', marginBottom: '2rem', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '0.5rem' }}>Valid professional chauffeur or commercial driver&apos;s license.</li>
            <li style={{ marginBottom: '0.5rem' }}>Minimum of 3 years of professional driving experience.</li>
            <li style={{ marginBottom: '0.5rem' }}>Clean driving record and background check.</li>
            <li style={{ marginBottom: '0.5rem' }}>Impeccable personal presentation.</li>
            <li style={{ marginBottom: '0.5rem' }}>Own or have access to a qualified premium vehicle in pristine condition.</li>
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
              <input type="tel" placeholder="Phone Number" required />
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
