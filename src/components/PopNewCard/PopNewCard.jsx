import { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import NewCardForm from '../NewCardForm/NewCardForm';
import { useTasks } from '../../context/TaskContext';
import { showSuccess, showError } from '../../utils/toast';
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

const PopNewCard = ({ style, onClose, onTaskCreated }) => {
  const [selectedTopic, setSelectedTopic] = useState('Web Design');
  const [selectedDate, setSelectedDate] = useState(null);
  const { addTask } = useTasks();

  const handleSubmit = async (formData) => {
    try {
      const taskData = {
        title: formData.title,
        topic: selectedTopic,
        description: formData.description || '',
        status: 'Без статуса',
        date: selectedDate
          ? selectedDate.toISOString()
          : new Date().toISOString(),
      };
      await addTask(taskData);
      showSuccess('Задача успешно создана!');
      onTaskCreated();
      onClose();
    } catch (err) {
      showError(err.message);
    }
  };

  const themeColors = {
    'Web Design': { bg: '#ffe4c2', text: '#ff6d00' },
    Research: { bg: '#b4fdd1', text: '#06b16e' },
    Copywriting: { bg: '#e9d4ff', text: '#9a48f1' },
  };
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
              <NewCardForm onSubmit={handleSubmit} />
              <Calendar
                onDateSelect={setSelectedDate}
                selectedDate={selectedDate}
              />
            </PopNewCardWrap>
            <PopNewCardCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme
                  $bgColor={themeColors['Web Design'].bg}
                  $textColor={themeColors['Web Design'].text}
                  $isActive={selectedTopic === 'Web Design'}
                  onClick={() => setSelectedTopic('Web Design')}
                >
                  <CategoriesThemeP>Web Design</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme
                  $bgColor={themeColors['Research'].bg}
                  $textColor={themeColors['Research'].text}
                  $isActive={selectedTopic === 'Research'}
                  onClick={() => setSelectedTopic('Research')}
                >
                  <CategoriesThemeP>Research</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme
                  $bgColor={themeColors['Copywriting'].bg}
                  $textColor={themeColors['Copywriting'].text}
                  $isActive={selectedTopic === 'Copywriting'}
                  onClick={() => setSelectedTopic('Copywriting')}
                >
                  <CategoriesThemeP>Copywriting</CategoriesThemeP>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate id="btnCreate" type="submit" form="formNewCard">
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardMain>
  );
};

export default PopNewCard;
