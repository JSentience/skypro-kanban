import { useNavigate } from 'react-router-dom';
import PopExit from '../components/PopExit/PopExit';

export const PopExitPage = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };

  const handleLogout = () => {
    if (setIsAuth) {
      setIsAuth(false);
    }
  };

  return <PopExit onClose={handleClose} onLogout={handleLogout} />;
};
