import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@modules/auth/hooks/useAuth';
import { LOGIN_PAGE } from '@modules/auth/routes';

export const AuthRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <></>;
  }

  if (!isLoading && !isAuthenticated) {
    navigate(LOGIN_PAGE);
  }

  return children;
};
