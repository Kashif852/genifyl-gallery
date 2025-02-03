'use client';
import AuthMiddleware from '@/components/middleware/AuthMiddleware';
import Dashboard from "@/components/dashboard/Dashboard";
import { useSelector } from 'react-redux';

export default function DashboardLayout({ children }) {
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <AuthMiddleware>
      <Dashboard>
        {children}
      </Dashboard>
    </AuthMiddleware>
  );
}