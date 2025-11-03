import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
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
  const [loginValue, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(loginValue, password);
      setIsAuth(true);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
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
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Логин"
                value={loginValue}
                onChange={(e) => setLogin(e.target.value)}
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
