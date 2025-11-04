import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: scroll;
    background-color: #EAEEF6;
`;

export const ContainerSignup = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ModalTtl = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

export const ModalTtlH2 = styled.h2`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
`;

export const ModalFormLogin = styled.form`
    width: 100%;
    display: block;
`;

export const ModalInput = styled.input`
    width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px;
    background: transparent;

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: #94a6be;
    }

    & {
        margin-bottom: 7px;
    }
`;

export const ModalBtnSignupEnt = styled.button`
    width: 100%;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    margin: 20px 0 20px;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.28px;

    &:hover {
        background-color: #33399b;
    }
`;

export const ModalFormGroup = styled.div`
    text-align: center;
`;

export const ModalFormGroupP = styled.p`
    color: #94a6be66;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
`;

export const ModalFormGroupA = styled.a`
  color: #94a6be66;
    text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;
