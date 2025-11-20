import { LoaderStyled, Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <Spinner />
      <h2>Загрузка, подождите</h2>
    </LoaderStyled>
  );
};

export default Loader;
