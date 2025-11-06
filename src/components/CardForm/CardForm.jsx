import {
  FormArea,
  FormBlock,
  FormInput,
  PopCardForm,
  Subttl,
} from './CardForm.styled';

export const CardForm = () => {
  return (
    <PopCardForm id="formNewCard" action="#">
      <FormBlock>
        <Subttl>Название задачи</Subttl>
        <FormInput
          type="text"
          name="name"
          id="formTitle"
          placeholder=" "
          autoFocus
          readOnly
        />
      </FormBlock>
      <FormBlock>
        <Subttl>Описание задачи</Subttl>
        <FormArea name="text" id="textArea" placeholder="" readOnly />
      </FormBlock>
    </PopCardForm>
  );
};
