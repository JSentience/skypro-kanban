import styled from 'styled-components';

export const Hover01 = styled.div`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = styled.div`
  &:hover {
    color: #33399b;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const Hover03 = styled.div`
  &:hover {
    background-color: #33399b;
    color: #ffffff;

    span {
      color: #ffffff;
    }
  }
`;
