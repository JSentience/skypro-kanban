import './App.css';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

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
      <div className="wrapper">
        {popBrowse && (
          <PopBrowse onClose={handleClosePopBrowse} style={{ display: 'block' }} />
        )}
        <Header />
        <Main loading={loading} onOpenPopBrowse={handleOpenPopBrowse} />
      </div>
    </>
  );
};

export default App;
