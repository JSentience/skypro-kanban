import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormGroupA,
  ModalFormGroupP,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  ModalTtlH2,
  Wrapper,
} from './SignIn.styled';

export const SignIn = ({ setIsAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate('/');
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <ModalTtlH2>Вход</ModalTtlH2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" onSubmit={handleSubmit}>
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ModalBtnEnter id="btnEnter" type="submit">
                Войти
              </ModalBtnEnter>
              <ModalFormGroup>
                <ModalFormGroupP>Нужно зарегистрироваться?</ModalFormGroupP>
                <ModalFormGroupA as={Link} to="/signup">
                  Регистрируйтесь здесь
                </ModalFormGroupA>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};
