import './Header.css';
import { useEffect, useState } from 'react';
import PopExit from '../PopExit/PopExit';
import PopNewCard from '../PopNewCard/PopNewCard';

export const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [popNewCard, setPopNewCard] = useState(false);

  useEffect(() => {
    const handleClickOut = (event) => {
      if (
        !event.target.matches('.header__user') &&
        !event.target.matches('.header__btn-main-new') &&
        !event.target.matches('._hover03') &&
        !event.target.matches('.header__pop-user-set')
      ) {
        setUserMenuOpen(false);
      }
      // if (!event.target.matches('.pop-new-card')) {
      //   setPopNewCard(false);
      // }
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
      <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="#" target="_self">
                <img src="/images/logo_dark.png" alt="logo" />
              </a>
            </div>
            <nav className="header__nav">
              <button
                className="header__btn-main-new _hover01"
                id="btnMainNew"
                onClick={() => {
                  setPopNewCard(!popNewCard);
                }}
              >
                Создать новую задачу
              </button>
              <a
                className="header__user _hover02"
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                }}
              >
                Ivan Ivanov
              </a>
              {userMenuOpen && (
                <div
                  className="header__pop-user-set pop-user-set"
                  id="user-set-target"
                  style={{ display: 'block' }}
                >
                  <p className="pop-user-set__name">Ivan Ivanov</p>
                  <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <button
                    type="button"
                    className="_hover03"
                    onClick={() => {
                      setLogOut(!logOut);
                      setUserMenuOpen(!userMenuOpen);
                    }}
                  >
                    Выйти
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>
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
