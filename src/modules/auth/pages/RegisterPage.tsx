import { RegisterForm } from '@modules/auth/components';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE } from '@modules/auth/routes';
import { toast } from 'react-toastify';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    toast.success('Registration Success!');
    navigate(LOGIN_PAGE);
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
        <h1 className="is-size-4 has-text-weight-medium mb-2">Register</h1>
        <RegisterForm onSuccess={handleRegisterSuccess} />
      </div>
    </div>
  );
};
