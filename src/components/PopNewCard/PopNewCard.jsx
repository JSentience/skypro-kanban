import Calendar from '../Calendar/Calendar';
import NewCardForm from '../NewCardForm/NewCardForm';
import {
  PopNewCardMain,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardCategories,
  CategoriesP,
  CategoriesThemes,
  CategoriesTheme,
  CategoriesThemeP,
  FormNewCreate,
  Subttl,
} from './PopNewCard.styled';

const PopNewCard = ({ style, onClose }) => {
  return (
    <PopNewCardMain $isActive={true} style={style}>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              &#10006;
            </PopNewCardClose>
            <PopNewCardWrap>
              <NewCardForm />
              <Calendar />
            </PopNewCardWrap>
            <PopNewCardCategories>
              <CategoriesP>
                <Subttl>Категория</Subttl>
              </CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme $isActive={true}>
                  <CategoriesThemeP>Web Design</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme>
                  <CategoriesThemeP>Research</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme>
                  <CategoriesThemeP>Copywriting</CategoriesThemeP>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate id="btnCreate">
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardMain>
  );
};

export default PopNewCard;
