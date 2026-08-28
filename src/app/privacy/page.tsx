export default function Privacy() {
  return (
    <main className="container section">
      <h2 className="section-title">Privacy Policy</h2>
      <div style={{ color: 'var(--text-muted)', marginTop: '2rem', maxWidth: '800px' }}>
        <p>Your privacy is our priority at Davial Taxi. We strictly adhere to global data protection regulations.</p>
        <br/>
        <h3 style={{ color: '#fff' }}>Data Collection</h3>
        <p>We collect essential information (name, email, payment details, and location data) strictly for the purpose of facilitating your premium ride experience.</p>
        <br/>
        <h3 style={{ color: '#fff' }}>Data Sharing</h3>
        <p>Your location and name are shared with your assigned driver partner solely for pickup and drop-off purposes. We do not sell your data to third parties.</p>
      </div>
    </main>
  );
}
