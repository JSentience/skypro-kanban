import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { useEffect, useState } from 'react';
import { PopExitPage } from '../../pages/PopExitPage';
import { CardPage } from '../../pages/CardPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { SignInPage } from '../../pages/SignInPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { PopBrowsePage } from '../../pages/PopBrowsePage';
import { NewCardPage } from '../../pages/NewCardPage';
import { PrivatePages } from '../../pages/AuthPage';

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
      <Route element={<PrivatePages isAuth={isAuth} />}>
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
              <PopBrowsePage
                onClose={handleClosePopBrowse}
                isActive={true}
                isEditMode={false}
              />
            }
          />
          <Route
            path="pop-exit"
            element={<PopExitPage setIsAuth={setIsAuth} />}
          />
          <Route
            path="new-card"
            element={<NewCardPage setIsAuth={setIsAuth} />}
          />
          <Route
            path="/card/:id"
            element={<CardPage onClose={handleClosePopBrowse} />}
          />
        </Route>
      </Route>
      <Route path="/signin" element={<SignInPage setIsAuth={setIsAuth} />} />

      <Route path="/signup" element={<SignUpPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
