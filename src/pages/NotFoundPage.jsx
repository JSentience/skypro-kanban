import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #333;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 30px;
`;

const NotFoundLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;
export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Страница не найдена</NotFoundText>
      <Link to="/">
        <NotFoundLink>Вернуться на главную</NotFoundLink>
      </Link>
    </NotFoundContainer>
  );
};
