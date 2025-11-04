import {useState} from 'react';
import {
  FormNewArea,
  FormNewBlock,
  FormNewInput,
  PopNewCardForm,
  Subttl,
} from './NewCardForm.styled';

const NewCardForm = ({onSubmit, error}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({title, description});
  };

  return (
    <PopNewCardForm id="formNewCard" onSubmit={handleSubmit}>
      {error && <p style={{color: 'red'}}>{error}</p>}
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
