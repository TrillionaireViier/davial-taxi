export default function Terms() {
  return (
    <main className="container section">
      <h2 className="section-title">Terms & Conditions</h2>
      <div style={{ color: 'var(--text-muted)', marginTop: '2rem', maxWidth: '800px' }}>
        <p>Welcome to Davial Taxi. By accessing our application and using our premium chauffeur services, you agree to be bound by these Terms and Conditions.</p>
        <br/>
        <h3 style={{ color: '#fff' }}>1. Service Agreement</h3>
        <p>Davial Taxi acts as a platform connecting users with premium driver partners. All bookings are subject to availability.</p>
        <br/>
        <h3 style={{ color: '#fff' }}>2. Payments</h3>
        <p>Payments are securely processed upon ride completion. Cancellation fees may apply if cancelled within 2 hours of the scheduled pickup.</p>
        <br/>
        <h3 style={{ color: '#fff' }}>3. User Conduct</h3>
        <p>Passengers are expected to treat drivers and vehicles with respect. Any damage caused to the vehicle will result in cleaning or repair fees.</p>
      </div>
    </main>
  );
}
