import styled from 'styled-components';

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid ${props => props.theme.colors.primary};
  outline: none;
  background: transparent;
  color: ${props => props.theme.colors.primary};

  a {
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  color: #ffffff;

  a {
    color: #ffffff;
  }
`;

export const Hide = styled.div`
  display: none;
`;

export const Dark = styled.div`
  display: none;
`;

export const ActiveCategory = styled.div`
  opacity: 1 !important;
`;
