import styled from 'styled-components';

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  color: ${(props) => props.theme.colors.text};
  background: transparent;
  border: 0.7px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${(props) => props.theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }
`;

export const FormNewArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  color: ${(props) => props.theme.colors.text};
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${(props) => props.theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const Subttl = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
