import {
  BtnBrowseClose,
  BtnBrowseDelete,
  BtnBrowseEdit,
  BtnEditCancel,
  BtnEditClose,
  BtnEditDelete,
  BtnEditSave,
  BtnGroup,
  CategoriesP,
  CategoriesTheme,
  CategoriesThemeP,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseBtnEdit,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseMain,
  PopBrowseTitle,
  PopBrowseTopBlock,
  PopBrowseWrap,
  Status,
  StatusP,
  StatusTheme,
  StatusThemeP,
  StatusThemes,
  Subttl,
  ThemeDownCategories,
} from './PopBrowse.styled.js';
import Calendar from '../Calendar/Calendar';

const PopBrowse = ({ onClose, isActive, isEditMode, id , theme}) => {
  const themeColors = {
    'Web Design': { bg: '#ffe4c2', text: '#ff6d00' },
    Research: { bg: '#b4fdd1', text: '#06b16e' },
    Copywriting: { bg: '#e9d4ff', text: '#9a48f1' },
  };

  const currentThemeColors = themeColors[theme] || { bg: '', text: '' };
  return (
    <PopBrowseMain $isActive={isActive}>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>Название задачи № {id}</PopBrowseTitle>
              <CategoriesTheme $isActive={true} $bgColor={currentThemeColors.bg} $textColor={currentThemeColors.text}>
                <CategoriesThemeP>{theme}</CategoriesThemeP>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusTheme $isHidden={false}>
                  <StatusThemeP>Без статуса</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isGray={false}>
                  <StatusThemeP>Нужно сделать</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isHidden={false}>
                  <StatusThemeP>В работе</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isHidden={false}>
                  <StatusThemeP>Тестирование</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isHidden={false}>
                  <StatusThemeP>Готово</StatusThemeP>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Subttl>Описание задачи</Subttl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <ThemeDownCategories>
              <CategoriesP>
                Категория
              </CategoriesP>
              <CategoriesTheme $isActive={true} $bgColor={currentThemeColors.bg} $textColor={currentThemeColors.text}>
                <CategoriesThemeP>{theme}</CategoriesThemeP>
              </CategoriesTheme>
            </ThemeDownCategories>
            <PopBrowseBtnBrowse>
              <BtnGroup>
                <BtnBrowseEdit>
                  <p>Редактировать задачу</p>
                </BtnBrowseEdit>
                <BtnBrowseDelete>
                  <p>Удалить задачу</p>
                </BtnBrowseDelete>
              </BtnGroup>
              <BtnBrowseClose onClick={onClose}>Закрыть</BtnBrowseClose>
            </PopBrowseBtnBrowse>
            <PopBrowseBtnEdit $isEditMode={isEditMode}>
              <BtnGroup>
                <BtnEditSave>
                  <a href="#">Сохранить</a>
                </BtnEditSave>
                <BtnEditCancel>
                  <a href="#">Отменить</a>
                </BtnEditCancel>
                <BtnEditDelete id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </BtnEditDelete>
              </BtnGroup>
              <BtnEditClose onClick={onClose}>
                <a href="#">Закрыть</a>
              </BtnEditClose>
            </PopBrowseBtnEdit>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseMain>
  );
};

export default PopBrowse;
