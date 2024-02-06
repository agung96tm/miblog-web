import { Button, Navbar as BulmaNavbar } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@modules/auth/hooks/useAuth';
import { DASHBOARD_PAGE } from '@modules/dashboard/routes';
export const Navbar = () => {
  const { isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <BulmaNavbar style={{ height: '10vh' }}>
      <BulmaNavbar.Brand>
        <BulmaNavbar.Item onClick={() => navigate('/')}>
          <h1 className="is-size-3 has-text-weight-bold">MiBlog</h1>
        </BulmaNavbar.Item>

        <BulmaNavbar.Item>
          <div className="field">
            <div className="control">
              <input className="input" type="name" placeholder="Search..." />
            </div>
          </div>
        </BulmaNavbar.Item>

        <BulmaNavbar.Burger />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu>
        <BulmaNavbar.Container align="right">
          {!isLoading && isAuthenticated && (
            <>
              <BulmaNavbar.Item
                hoverable={false}
                active={false}
                onClick={() => navigate(DASHBOARD_PAGE)}
              >
                Dashboard
              </BulmaNavbar.Item>
            </>
          )}
          {!isLoading && !isAuthenticated && (
            <>
              <BulmaNavbar.Item hoverable={false} active={false}>
                <Button color="success" onClick={() => navigate('/login')}>
                  Login
                </Button>
              </BulmaNavbar.Item>
              <BulmaNavbar.Item hoverable={false} active={false}>
                <Button color="" onClick={() => navigate('/register')}>
                  Register
                </Button>
              </BulmaNavbar.Item>
            </>
          )}
        </BulmaNavbar.Container>
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  );
};
