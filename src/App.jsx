import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/PopBrowse/PopBrowse';
import { Wrapper } from './components/wrapper.styled';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [popBrowse, setPopBrowse] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleClosePopBrowse = () => {
    setPopBrowse(false);
  };

  const handleOpenPopBrowse = () => {
    setPopBrowse(true);
  };

  return (
    <>
      <Wrapper>
        {popBrowse && (
          <PopBrowse
            onClose={handleClosePopBrowse}
            style={{ display: 'block' }}
          />
        )}
        <Header />
        <Main loading={loading} onOpenPopBrowse={handleOpenPopBrowse} />
      </Wrapper>
    </>
  );
};

export default App;
