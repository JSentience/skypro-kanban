import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { PopExitPage } from '../../pages/PopExitPage';

import { NotFoundPage } from '../../pages/NotFoundPage';
import { SignInPage } from '../../pages/SignInPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { CardPage } from '../../pages/CardPage';
import { NewCardPage } from '../../pages/NewCardPage';
import { PrivatePages } from '../../pages/AuthPage';
import { useAuth } from '../../context/AuthContext';

export const AppRoutes = () => {
  const { isAuthenticated, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const handleClosePopBrowse = () => {
    navigate('/');
  };

  const handleOpenPopBrowse = (e) => {
    e.preventDefault();
    navigate('/pop-browse');
  };

  return (
    <Routes>
      <Route
        element={<PrivatePages isAuth={isAuthenticated} loading={loading} />}
      >
        <Route
          path="/"
          element={
            <MainPage
              onOpenPopBrowse={handleOpenPopBrowse}
              onLogout={handleLogout}
            />
          }
        >
          <Route path="pop-exit" element={<PopExitPage />} />
          <Route
            path="new-card"
            element={<NewCardPage onTaskCreated={() => navigate('/')} />}
          />
          <Route
            path="/pop-browse/:id"
            element={
              <CardPage onClose={handleClosePopBrowse} isActive={true} />
            }
          />
        </Route>
      </Route>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
