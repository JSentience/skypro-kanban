import {
  PopExitBlock,
  PopExitContainer,
  PopExitExitNo,
  PopExitExitYes,
  PopExitFormGroup,
  PopExitStyled,
  PopExitTtl,
} from './PopExit.styled';
import { useNavigate } from 'react-router-dom';

const PopExit = ({ style, onClose, onLogout }) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/signin');
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <PopExitStyled style={style}>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form action="#">
            <PopExitFormGroup>
              <PopExitExitYes onClick={handleLogout}>
                <span>Да, выйти</span>
              </PopExitExitYes>
              <PopExitExitNo id="exitNo" onClick={onClose}>
                <span>Нет, остаться</span>
              </PopExitExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyled>
  );
};

export default PopExit;
