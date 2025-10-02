import columns from '../../../data';
import Column from '../Column/Column';
import Loader from '../Loader/Loader';
import { Container } from '../Wrapper.styled';
import { MainBlock, MainContent, MainStyled } from './Main.styled';

const Main = ({ loading, onOpenPopBrowse }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainStyled>
          <Container>
            <MainBlock>
              <MainContent>
                {columns.map((column, index) => (
                  <Column
                    key={index}
                    title={column.title}
                    cards={column.cards}
                    onOpenPopBrowse={onOpenPopBrowse}
                  />
                ))}
              </MainContent>
            </MainBlock>
          </Container>
        </MainStyled>
      )}
    </>
  );
};

export default Main;
