import Calendar from '../Calendar/Calendar';
import NewCardForm from '../NewCardForm/NewCardForm';
import {
  CategoriesP,
  CategoriesTheme,
  CategoriesThemeP,
  CategoriesThemes,
  FormNewCreate,
  PopNewCardBlock,
  PopNewCardCategories,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardMain,
  PopNewCardTitle,
  PopNewCardWrap,
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
                Категория
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
