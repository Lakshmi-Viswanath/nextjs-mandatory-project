import { useState, useEffect } from 'react';
import { useAuth } from '@/pages/context/AuthContext';
import LoginPage from './auth/login';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const { user } = useAuth(); // Assuming `user` holds the authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true); // User is logged in
    }
  }, [user]);

  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LoginPage />
      )}
    </>
  );
}
