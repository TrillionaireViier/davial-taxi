'use client';
import './globals.css';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Link from 'next/link';

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="navbar">
      <div className="logo"><Link href="/">DAVIAL<span>TAXI</span></Link></div>
      <nav className="nav-links">
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/drivers">Drivers</Link>
        {user ? (
          <>
            <Link href={`/dashboard/${user.role === 'admin' ? 'admin' : 'user'}`} className="btn btn-outline">Dashboard</Link>
            <button onClick={logout} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline">Login</Link>
            <Link href="/login" className="btn btn-primary" style={{ background: 'var(--accent-gold)', color: '#000' }}>Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="logo">DAVIAL<span>TAXI</span></div>
        <div className="footer-links">
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/drivers">Driver Partners</Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
