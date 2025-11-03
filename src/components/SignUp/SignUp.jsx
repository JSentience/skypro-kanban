import {
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalBtnSignupEnt,
  ModalFormGroup,
  ModalFormGroupA,
  ModalFormGroupP,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  ModalTtlH2,
  Wrapper,
} from './SignUp.styled';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <ModalTtlH2>Регистрация</ModalTtlH2>
            </ModalTtl>
            <ModalFormLogin id="formLogUp" action="#">
              <ModalInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ModalBtnSignupEnt id="SignUpEnter">
                Зарегистрироваться
              </ModalBtnSignupEnt>
              <ModalFormGroup>
                <ModalFormGroupP>
                  Уже есть аккаунт?{' '}
                  <ModalFormGroupA as={Link} to="/signin">
                    Войдите здесь
                  </ModalFormGroupA>
                </ModalFormGroupP>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};
