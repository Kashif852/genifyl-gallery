'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { verifySession } from '@/redux/slices/authSlice';

export default function AuthMiddleware({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await dispatch(verifySession()).unwrap();
      } catch (error) {
        console.error('Auth check failed:', error);
        const currentPath = window.location.pathname;
        router.replace(`/login?redirect=${encodeURIComponent(currentPath)}`);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isAuthenticated || !user) {
      checkAuth();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, router, isAuthenticated, user]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <span className="mt-4 text-gray-600">Verifying session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return children;
}