import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {register} from '../../services/api';
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

export const SignUp = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginTrim = login.trim();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();
    if (!loginTrim || !trimmedPassword || !trimmedName) {
      setError('Поле не может быть пустым или содержать только пробелы')
      return
    }
    try {
      await register(loginTrim, trimmedPassword, trimmedName);
      navigate('/signin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <ModalTtlH2>Регистрация</ModalTtlH2>
            </ModalTtl>
            <ModalFormLogin id="formLogUp" onSubmit={handleSubmit}>
              {error && <p style={{color: 'red'}}>{error}</p>}
              <ModalInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ModalBtnSignupEnt id="SignUpEnter" type="submit">
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
