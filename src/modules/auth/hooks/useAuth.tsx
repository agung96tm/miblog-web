import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const doAuthCheck = () => {
    setIsLoading(true);

    const access = localStorage.getItem('access');
    if (!!access) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    doAuthCheck();
  }, []);

  return { doAuthCheck, isAuthenticated, isLoading };
};
