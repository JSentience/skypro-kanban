import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
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

export const SignIn = () => {
  const [loginValue, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedLogin = loginValue.trim();
    const trimmedPassword = password.trim();
    if (!trimmedLogin || !trimmedPassword) {
      setError('Поле не может быть пустым или содержать только пробелы');
      return;
    }
    try {
      const response = await login(trimmedLogin, trimmedPassword);
      authLogin(response.user);
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
                placeholder="Эл. почта "
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
