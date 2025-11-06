import {Route, Routes, useNavigate} from 'react-router-dom';
import {MainPage} from '../../pages/MainPage';
import {useEffect, useState} from 'react';
import {PopExitPage} from '../../pages/PopExitPage';

import {NotFoundPage} from '../../pages/NotFoundPage';
import {SignInPage} from '../../pages/SignInPage';
import {SignUpPage} from '../../pages/SignUpPage';
import {CardPage} from '../../pages/CardPage';
import {NewCardPage} from '../../pages/NewCardPage';
import {PrivatePages} from '../../pages/AuthPage';
import {getToken, getUser} from '../../services/api';

export const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(!!getToken());
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const loadUser = async () => {
      setIsAuth(!!getToken());
      if (getToken()) {
        let userData = {
          name: localStorage.getItem('userName'),
          login: localStorage.getItem('userLogin')
        };
        if (!userData.name || !userData.login) {
          try {
            const apiUser = await getUser();
            userData = apiUser.user;
            localStorage.setItem('userName', userData.name);
            localStorage.setItem('userLogin', userData.login);
          } catch (error) {
            console.error('Ошибка при загрузке данных пользователя:', error);
          }
        }
        setUser(userData);
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('kanbanToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userLogin');
    setIsAuth(false);
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
      <Route element={<PrivatePages isAuth={isAuth}/>}>
        <Route
          path="/"
          element={
            <MainPage
              loading={loading}
              onOpenPopBrowse={handleOpenPopBrowse}
              onLogout={handleLogout}
              user={user}
            />
          }
        >
          <Route
            path="pop-exit"
            element={<PopExitPage setIsAuth={setIsAuth}/>}
          />
          <Route
            path="new-card"
            element={<NewCardPage onTaskCreated={() => navigate('/')}/>}
          />
          <Route
            path="/pop-browse/:id"
            element={
              <CardPage
                onClose={handleClosePopBrowse}
                isActive={true}
              />
            }
          />

        </Route>


      </Route>
      <Route path="/signin" element={<SignInPage setIsAuth={setIsAuth}/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
};
