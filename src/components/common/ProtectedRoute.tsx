import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import type { UserRole } from '../../types/user';
export default function ProtectedRoute({ role }: { role?: UserRole }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace/>;
  if (role && user.role !== role) return <Navigate to={`/${user.role}`} replace/>;
  return <Outlet/>;
}
