import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { useEffect, useState } from 'react';
import { PopExitPage } from '../../pages/PopExitPage';
import { CardPage } from '../../pages/CardPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { SignInPage } from '../../pages/SignInPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { PopBrowsePage } from '../../pages/PopBrowsePage';
import { NewCardPage } from '../../pages/NewCardPage';

export const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('Auth state changed:', isAuth);
  }, [isAuth]);

  const handleLogout = () => {
    console.log('Global logout called');
    setIsAuth(false);
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
        path="/"
        element={
          <MainPage
            loading={loading}
            onOpenPopBrowse={handleOpenPopBrowse}
            onLogout={handleLogout}
          />
        }
      >
        <Route
          path="pop-browse"
          element={
            isAuth ? (
              <PopBrowsePage
                onClose={handleClosePopBrowse}
                isActive={true}
                isEditMode={false}
              />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
        <Route
          path="pop-exit"
          element={
            isAuth ? (
              <PopExitPage setIsAuth={setIsAuth} />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
        <Route
          path="new-card"
          element={
            isAuth ? (
              <NewCardPage setIsAuth={setIsAuth} />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
      </Route>
      <Route path="/signin" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/card/:id"
        element={isAuth ? <CardPage /> : <Navigate to="/signin" replace />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
