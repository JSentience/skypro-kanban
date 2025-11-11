import { useState } from 'react';
import { showError } from '../../utils/toast';
import {
  FormNewArea,
  FormNewBlock,
  FormNewInput,
  PopNewCardForm,
  Subttl,
} from './NewCardForm.styled';

const NewCardForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    if (!trimmedTitle) {
      showError('Название задачи не может быть пустым или содержать только пробелы');
      return;
    }
    onSubmit({ title: trimmedTitle, description: trimmedDescription });
  };

  return (
    <PopNewCardForm id="formNewCard" onSubmit={handleSubmit}>
      <FormNewBlock>
        <Subttl>Название задачи</Subttl>
        <FormNewInput
          type="text"
          name="name"
          id="formTitle"
          placeholder="Введите название задачи..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          required
        />
      </FormNewBlock>
      <FormNewBlock>
        <Subttl>Описание задачи</Subttl>
        <FormNewArea
          name="text"
          id="textArea"
          placeholder="Введите описание задачи..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormNewBlock>
    </PopNewCardForm>
  );
};

export default NewCardForm;
