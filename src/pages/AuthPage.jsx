import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

export const PrivatePages = ({ isAuth, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
};
