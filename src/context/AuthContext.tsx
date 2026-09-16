import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react';
import type { User, UserRole } from '../types/user';

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, _password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  updateProfile: (patch: Partial<User>) => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const demoUsers: Record<UserRole, User> = {
  student: { id: 1, name: 'Ayesha Rahman', email: 'student@unimove.edu', role: 'student', studentId: 'CSE-221-014', department: 'Computer Science', phone: '01710000001', status: 'active' },
  admin: { id: 100, name: 'Transport Admin', email: 'admin@unimove.edu', role: 'admin', phone: '01810000000', status: 'active' },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem('unimove_user');
    return raw ? JSON.parse(raw) as User : null;
  });

  const login = useCallback(async (email: string, _password: string, role: UserRole) => {
    const next = { ...demoUsers[role], email: email || demoUsers[role].email };
    localStorage.setItem('unimove_token', `demo-${role}-token`);
    localStorage.setItem('unimove_user', JSON.stringify(next));
    setUser(next);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('unimove_token');
    localStorage.removeItem('unimove_user');
    setUser(null);
  }, []);

  const updateProfile = useCallback((patch: Partial<User>) => {
    setUser(current => {
      if (!current) return current;
      const next = { ...current, ...patch };
      localStorage.setItem('unimove_user', JSON.stringify(next));
      return next;
    });
  }, []);

  const value = useMemo(() => ({ user, isAuthenticated: !!user, login, logout, updateProfile }), [user, login, logout, updateProfile]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
