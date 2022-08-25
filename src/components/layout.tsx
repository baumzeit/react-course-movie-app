import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main className="container max-w-lg mx-auto mt-8">
      <Outlet />
    </main>
  );
};
