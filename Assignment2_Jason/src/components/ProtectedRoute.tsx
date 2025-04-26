import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../zustand/store';

export default function ProtectedRoute() {
  const accessToken = useAuthStore((state) => state.accessToken);
  
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}