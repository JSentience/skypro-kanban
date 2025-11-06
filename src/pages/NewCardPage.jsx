import { useNavigate } from 'react-router-dom';
import PopNewCard from '../components/PopNewCard/PopNewCard';

export const NewCardPage = ({ onTaskCreated, theme }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <PopNewCard
      onClose={handleClose}
      onTaskCreated={onTaskCreated}
      theme={theme}
    />
  );
};
