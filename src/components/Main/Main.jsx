import './Main.css';
import Column from '../Column/Column';
import columns from '../../../data';
import Loader from '../Loader/Loader';

const Main = ({ loading, onOpenPopBrowse }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                {columns.map((column, index) => (
                  <Column
                    key={index}
                    title={column.title}
                    cards={column.cards}
                    onOpenPopBrowse={onOpenPopBrowse}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Main;
