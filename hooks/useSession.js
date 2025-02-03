// hooks/useSession.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { verifySession } from '../redux/slices/authSlice';

const useSession = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, loading: authLoading, error: authError, tokenExpired } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      await dispatch(verifySession());
      setIsLoading(false);
    };

    checkSession();
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && tokenExpired) {
      router.replace('/login');
    }
  }, [isLoading, tokenExpired, router]);

  return { isLoading: isLoading || authLoading, user, authError };
};

export default useSession;