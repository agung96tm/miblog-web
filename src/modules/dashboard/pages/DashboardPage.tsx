import { useLoggedInUser } from '@modules/dashboard/hooks';

export const DashboardPage = () => {
  const { fetchedData: user, isLoading } = useLoggedInUser();
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
        <div>Name: {user?.name}</div>
        <div>Email: {user?.email}</div>
      </div>
    </div>
  );
};
