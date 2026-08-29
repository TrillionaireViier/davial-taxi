'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login/signup by just logging them in with the provided email
    login(email);
  };

  return (
    <main className="container section text-center" style={{ maxWidth: '400px' }}>
      <h2 className="section-title">{isLogin ? 'Sign In' : 'Create Account'}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Hint: Use &quot;admin@davial.com&quot; for Admin access, &quot;driver@davial.com&quot; for Driver, or any other email for User.
      </p>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Full Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
        )}
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
        {!isLogin && (
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
        )}
        <button type="submit" className="btn btn-primary btn-block">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      
      <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
        {isLogin ? "Don&apos;t have an account? " : "Already have an account? "}
        <button 
          onClick={() => setIsLogin(!isLogin)} 
          style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', fontSize: '1rem', padding: 0 }}
        >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </main>
  );
}
