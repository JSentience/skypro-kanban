import Calendar from '../Calendar/Calendar';
import {
  CategoriesP,
  CategoriesTheme,
  CategoriesThemeP,
  CategoriesThemes,
  PopCardBlock,
  PopCardCategories,
  PopCardClose,
  PopCardContainer,
  PopCardContent,
  PopCardMain,
  PopCardTitle,
  PopCardWrap,
  Subttl,
} from './CardDesc.styled';
import { CardForm } from '../CardForm/CardForm';

const CardDesc = ({ style, onClose, id, theme }) => {
  const themeColors = {
    'Web Design': { bg: '#ffe4c2', text: '#ff6d00' },
    Research: { bg: '#b4fdd1', text: '#06b16e' },
    Copywriting: { bg: '#e9d4ff', text: '#9a48f1' },
  };
  return (
    <PopCardMain $isActive={true} style={style}>
      <PopCardContainer>
        <PopCardBlock>
          <PopCardContent>
            <PopCardTitle>Описание задачи № {id}</PopCardTitle>
            <PopCardClose
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              &#10006;
            </PopCardClose>
            <PopCardWrap>
              <CardForm />
              <Calendar />
            </PopCardWrap>
            <PopCardCategories>
              <CategoriesP>
                <Subttl>Категория</Subttl>
              </CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme $isActive={theme === 'Web Design'} bgColor={themeColors['Web Design'].bg} textColor={themeColors['Web Design'].text}>
                  <CategoriesThemeP>Web Design</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme $isActive={theme === 'Research'} bgColor={themeColors.Research.bg} textColor={themeColors.Research.text}>
                  <CategoriesThemeP>Research</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme $isActive={theme === 'Copywriting'} bgColor={themeColors.Copywriting.bg} textColor={themeColors.Copywriting.text}>
                  <CategoriesThemeP>Copywriting</CategoriesThemeP>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopCardCategories>
            {/*<FormCreate id="btnCreate">Создать задачу</FormCreate>*/}
          </PopCardContent>
        </PopCardBlock>
      </PopCardContainer>
    </PopCardMain>
  );
};

export default CardDesc;
