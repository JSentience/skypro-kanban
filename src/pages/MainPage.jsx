import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import { Wrapper } from '../components/Wrapper.styled';
import { Outlet } from 'react-router-dom';

export const MainPage = ({ loading, onOpenPopBrowse, onLogout }) => {
  return (
    <Wrapper>
      <Header onLogout={onLogout} />
      <Hero loading={loading} onOpenPopBrowse={onOpenPopBrowse} />
      <Outlet />
    </Wrapper>
  );
};
