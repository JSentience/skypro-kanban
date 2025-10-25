import { useParams } from 'react-router-dom';
import PopBrowse from '../components/PopBrowse/PopBrowse';

export const PopBrowsePage = ({ onClose, isActive, isEditMode }) => {
  const { id } = useParams();
  return <PopBrowse onClose={onClose} isActive={isActive} isEditMode={isEditMode} id={id} />;
};
