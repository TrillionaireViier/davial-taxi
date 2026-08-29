'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  return (
    <main className="container section text-center" style={{ maxWidth: '400px' }}>
      <h2 className="section-title">Sign In</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Hint: Use &quot;admin@davial.com&quot; for Admin access, &quot;driver@davial.com&quot; for Driver, or any other email for User.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </main>
  );
}
