import {
  PopExitBlock,
  PopExitContainer,
  PopExitExitNo,
  PopExitExitYes,
  PopExitFormGroup,
  PopExitStyled,
  PopExitTtl,
} from './PopExit.styled';

const PopExit = ({ style, onClose }) => {
  return (
    <PopExitStyled style={style} id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
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
