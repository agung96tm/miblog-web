import { LoginForm } from '../components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DASHBOARD_PAGE } from '@modules/dashboard/routes';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    toast.success('Login Success!');
    navigate(DASHBOARD_PAGE);
  };

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '300px',
        margin: 'auto',
      }}
    >
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="is-size-4 has-text-weight-medium mb-2">Login</h1>
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};
