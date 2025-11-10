import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import { Wrapper } from '../components/Wrapper.styled';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const MainPage = ({ onOpenPopBrowse, onLogout }) => {
  const { user } = useAuth();

  return (
    <Wrapper>
      <Header onLogout={onLogout} user={user} />
      <Hero onOpenPopBrowse={onOpenPopBrowse} />
      <Outlet />
    </Wrapper>
  );
};
