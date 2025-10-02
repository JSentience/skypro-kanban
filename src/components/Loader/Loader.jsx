import { LoaderStyled, LoaderText } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <h2>
        <LoaderText>Загрузка, подождите</LoaderText>
      </h2>
    </LoaderStyled>
  );
};

export default Loader;
