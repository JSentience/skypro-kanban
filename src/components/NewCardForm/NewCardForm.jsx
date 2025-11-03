import {
  PopNewCardForm,
  FormNewBlock,
  FormNewInput,
  FormNewArea,
  Subttl,
} from './NewCardForm.styled';

const NewCardForm = () => {
  return (
    <PopNewCardForm id="formNewCard" action="#">
      <FormNewBlock>
        <Subttl>Название задачи</Subttl>
        <FormNewInput
          type="text"
          name="name"
          id="formTitle"
          placeholder="Введите название задачи..."
          autoFocus
        />
      </FormNewBlock>
      <FormNewBlock>
        <Subttl>Описание задачи</Subttl>
        <FormNewArea
          name="text"
          id="textArea"
          placeholder="Введите описание задачи..."
        />
      </FormNewBlock>
    </PopNewCardForm>
  );
};

export default NewCardForm;
