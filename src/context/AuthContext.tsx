'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type User = { email: string; role: 'admin' | 'user' | 'driver' } | null;

interface AuthContextType {
  user: User;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({ user: null, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  const login = (email: string) => {
    let role: 'admin' | 'user' | 'driver' = 'user';
    if (email.includes('admin')) role = 'admin';
    if (email.includes('driver')) role = 'driver';
    
    setUser({ email, role });
    
    if (role === 'admin') router.push('/dashboard/admin');
    else router.push('/dashboard/user');
  };

  const logout = () => {
    setUser(null);
    router.push('/');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
