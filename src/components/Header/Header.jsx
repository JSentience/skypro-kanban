import {useEffect, useState} from 'react';
import PopExit from '../PopExit/PopExit';
import PopNewCard from '../PopNewCard/PopNewCard';
import {Container} from '../Wrapper.styled';
import {
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderLogo,
  HeaderNav,
  HeaderPopUserSet,
  HeaderStyled,
  HeaderUser,
  PopUserSetButton,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from './Header.styled';
import {Link, useNavigate} from 'react-router-dom';

export const Header = ({ onLogout , user}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [popNewCard, setPopNewCard] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOut = (event) => {
      if (
        !event.target.closest('[data-header-user]') &&
        !event.target.closest('[data-header-btn-main-new]') &&
        !event.target.closest('[data-hover03]') &&
        !event.target.closest('[data-header-pop-user-set]')
      ) {
        setUserMenuOpen(false);
      }
    };
    window.addEventListener('click', handleClickOut);
    return () => {
      window.removeEventListener('click', handleClickOut);
    };
  }, []);

  const handleClickNew = (e) => {
    e.preventDefault();
    navigate('/new-card');
  };

  const handleClosePopExit = () => {
    setLogOut(false);
  };

  const handleClosePopNewCard = () => {
    setPopNewCard(false);
  };
  const handlePopUserExit = () => {
    navigate('/pop-exit');
  };

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderBlock>
            <HeaderLogo className="_show _light" data-header-logo>
              <a href="" target="_self">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </HeaderLogo>
            <HeaderLogo className="_dark" data-header-logo>
              <Link to="/" target="_self">
                <img src="/images/logo_dark.png" alt="logo" />
              </Link>
            </HeaderLogo>
            <HeaderNav>
              <HeaderBtnMainNew onClick={handleClickNew}>
                Создать новую задачу
              </HeaderBtnMainNew>
              <HeaderUser
                data-header-user
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                }}
              >
                {user?.name || 'Пользователь'}
              </HeaderUser>
              {userMenuOpen && (
                <HeaderPopUserSet data-header-pop-user-set id="user-set-target">
                  <PopUserSetName>{user?.name || 'Пользователь'}</PopUserSetName>
                  <PopUserSetMail>{user?.login || 'email@example.com'}</PopUserSetMail>
                  <PopUserSetTheme>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </PopUserSetTheme>
                  <PopUserSetButton
                    type="button"
                    onClick={() => {
                      setLogOut(!logOut);
                      setUserMenuOpen(!userMenuOpen);
                      handlePopUserExit();
                    }}
                  >
                    Выйти
                  </PopUserSetButton>
                </HeaderPopUserSet>
              )}
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </HeaderStyled>
      {logOut && (
        <PopExit
          onClose={handleClosePopExit}
          onLogout={onLogout}
          style={{ display: 'block' }}
        />
      )}
      {popNewCard && (
        <PopNewCard
          onClose={handleClosePopNewCard}
          style={{ display: 'block' }}
        />
      )}
    </>
  );
};

export default Header;
