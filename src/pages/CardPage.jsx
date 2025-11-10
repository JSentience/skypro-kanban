import { useParams } from 'react-router-dom';
import PopBrowse from '../components/PopBrowse/PopBrowse';

export const CardPage = ({ onClose, isActive }) => {
  const { id } = useParams();
  return <PopBrowse onClose={onClose} isActive={isActive} id={id} />;
};
