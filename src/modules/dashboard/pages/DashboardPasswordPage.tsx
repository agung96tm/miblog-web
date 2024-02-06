import { PasswordForm } from '@modules/dashboard/components';
import { useLoggedInUser } from '@modules/dashboard/hooks';

export const DashboardPasswordPage = () => {
  const { isLoading } = useLoggedInUser();
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <PasswordForm />
      </div>
    </div>
  );
};
