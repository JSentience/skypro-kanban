import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import {Wrapper} from '../components/Wrapper.styled';
import {Outlet} from 'react-router-dom';
import {fetchTasks} from "../services/api";

export const MainPage = ({ loading, onOpenPopBrowse, onLogout, user }) => {
  return (
    <Wrapper>
      <Header onLogout={onLogout} user={user} />
      <Hero loading={loading} onOpenPopBrowse={onOpenPopBrowse} fetchTasks={fetchTasks} />
      <Outlet />
    </Wrapper>
  );
};
