export default function Privacy() {
  return (
    <main className="container section">
      <h2 className="section-title">Privacy Policy</h2>
      <p style={{ color: 'var(--text-muted)' }}>Last updated: August 2026</p>
      
      <div style={{ color: 'var(--text-muted)', marginTop: '2rem', maxWidth: '800px', lineHeight: '1.6' }}>
        <h3 style={{ color: '#fff' }}>1. Information We Collect</h3>
        <p>At Davial Taxi, we are committed to protecting your privacy. We collect the following types of information when you use our website, apps, and services:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Personal Details:</strong> Name, email address, phone number, and account credentials.</li>
            <li style={{ marginBottom: '10px' }}><strong>Payment Information:</strong> Credit card details and billing addresses, securely processed by our payment partners.</li>
            <li style={{ marginBottom: '10px' }}><strong>Location Data:</strong> GPS coordinates for pickup, drop-off, and active ride tracking.</li>
        </ul>
        <br/>

        <h3 style={{ color: '#fff' }}>2. How We Use Your Information</h3>
        <p>We use your information to provide and improve our premium ride services, including:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li style={{ marginBottom: '10px' }}>Facilitating bookings, payments, and communication between you and your driver.</li>
            <li style={{ marginBottom: '10px' }}>Providing customer support and responding to inquiries.</li>
            <li style={{ marginBottom: '10px' }}>Enhancing the safety and security of our users and drivers.</li>
        </ul>
        <br/>

        <h3 style={{ color: '#fff' }}>3. Data Sharing</h3>
        <p>We do not sell your personal information to third parties. We may share necessary details with driver partners to complete your ride, or with legal authorities if required by law.</p>
        <br/>

        <h3 style={{ color: '#fff' }}>4. Security</h3>
        <p>We implement industry-standard encryption and security protocols to safeguard your personal and payment data from unauthorized access or disclosure.</p>
        <br/>

        <h3 style={{ color: '#fff' }}>5. Your Rights</h3>
        <p>You have the right to access, update, or request the deletion of your personal data at any time through your user panel. For further assistance, contact our privacy team.</p>
      </div>
    </main>
  );
}
