import { useEffect, useState } from 'react';
import PopExit from '../PopExit/PopExit';
import PopNewCard from '../PopNewCard/PopNewCard';
import { Container } from '../wrapper.styled';
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

export const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [popNewCard, setPopNewCard] = useState(false);

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

  const handleClosePopExit = () => {
    setLogOut(false);
  };

  const handleClosePopNewCard = () => {
    setPopNewCard(false);
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
              <a href="#" target="_self">
                <img src="/images/logo_dark.png" alt="logo" />
              </a>
            </HeaderLogo>
            <HeaderNav>
              <HeaderBtnMainNew
                data-header-btn-main-new
                id="btnMainNew"
                onClick={() => {
                  setPopNewCard(!popNewCard);
                }}
              >
                Создать новую задачу
              </HeaderBtnMainNew>
              <HeaderUser
                data-header-user
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                }}
              >
                Ivan Ivanov
              </HeaderUser>
              {userMenuOpen && (
                <HeaderPopUserSet data-header-pop-user-set id="user-set-target">
                  <PopUserSetName>Ivan Ivanov</PopUserSetName>
                  <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
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
                    data-hover03
                    onClick={() => {
                      setLogOut(!logOut);
                      setUserMenuOpen(!userMenuOpen);
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
        <PopExit onClose={handleClosePopExit} style={{ display: 'block' }} />
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
