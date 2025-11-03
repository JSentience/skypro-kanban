import { Navigate, Outlet } from 'react-router-dom';

export const PrivatePages = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
};
