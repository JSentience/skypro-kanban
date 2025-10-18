import { useNavigate } from 'react-router-dom';
import PopExit from '../components/PopExit/PopExit';

export const PopExitPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  console.log('PopExitPage rendered, setIsAuth:', typeof setIsAuth);

  const handleClose = () => {
    navigate('/');
  };

  const handleLogout = () => {
    console.log('Logging out, setting auth to false');
    if (setIsAuth) {
      setIsAuth(false);
    } else {
      console.error('setIsAuth is not defined');
    }
  };

  return <PopExit onClose={handleClose} onLogout={handleLogout} />;
};
