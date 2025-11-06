import styled, { css } from 'styled-components';

export const PopBrowseMain = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  background: rgba(0, 0, 0, 0.4);

  ${(props) =>
    props.$isActive &&
    css`
      display: flex;
    `};

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  gap: 10px;

  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 400px;

  @media screen and (max-width: 495px) {
    font-size: 14px;
    line-height: 1;
    max-width: 200px;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      background-color: #94a6be;
      color: #ffffff;
    `}

  ${(props) =>
    props.$isHidden &&
    css`
      display: none;
    `}

  ${(props) =>
    props.$isGray &&
    css`
      color: #94a6be;
    `}
`;

export const StatusThemeP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
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
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 495px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  ${(props) =>
    props.$isOtherMonth &&
    css`
      opacity: 0;
    `}

  ${(props) =>
    props.$isCellDay &&
    css`
      &:hover {
        color: #94a6be;
        background-color: #eaeef6;
      }
    `}

  ${(props) =>
    props.$isActiveDay &&
    css`
      background-color: #94a6be;
      color: #ffffff;
    `}

  ${(props) =>
    props.$isCurrent &&
    css`
      font-weight: 700;
    `}

  @media screen and (max-width: 495px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }

  @media screen and (max-width: 495px) {
    font-size: 14px;
  }
`;

export const ThemeDownCategories = styled.div`
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      opacity: 1;
    `}
`;

export const CategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const BtnBrowseEdit = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid #565eef;
  outline: none;
  background: transparent;
  color: #565eef;
  &:hover {
    background-color: #33399b;
    color: #ffffff;

    p {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const BtnBrowseDelete = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid #565eef;
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right: 8px;

  &:hover {
    background-color: #33399b;
    color: #ffffff;

    p {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
  }
`;

export const BtnBrowseClose = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
    color: #ffffff;

    p {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  ${(props) =>
    !props.$isEditMode &&
    css`
      display: none;
    `};
`;

export const BtnEditSave = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  background: transparent;
  border: 0.7px solid #565eef;
  outline: none;
  color: #565eef;

  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const BtnEditCancel = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid #565eef;
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right: 8px;

  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
  }
`;

export const BtnEditDelete = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid #565eef;
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right: 8px;

  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
  }
`;

export const BtnEditClose = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  a {
    color: #ffffff;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const Subttl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
