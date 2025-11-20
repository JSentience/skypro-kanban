import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper, Container } from '../components/Wrapper.styled';
import { MainStyled, MainBlock, MainContent } from '../components/Hero/Main.styled';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 20px;
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

const NotFoundLink = styled(Link)`
  color: #565eef;
  text-decoration: none;
  font-size: 1.2rem;
  border: 0.7px solid #565eef;
  border-radius: 4px;
  padding: 10px 20px;
  background: transparent;

  &:hover {
    text-decoration: underline;
  }
`;

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <MainStyled>
        <Container>
          <MainBlock>
            <MainContent>
              <NotFoundContainer>
                <NotFoundTitle>404</NotFoundTitle>
                <NotFoundText>Страница не найдена</NotFoundText>
                <NotFoundLink to="/">Вернуться на главную</NotFoundLink>
              </NotFoundContainer>
            </MainContent>
          </MainBlock>
        </Container>
      </MainStyled>
    </Wrapper>
  );
};
