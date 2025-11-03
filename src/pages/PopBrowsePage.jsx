import {useLocation, useParams} from 'react-router-dom';
import PopBrowse from '../components/PopBrowse/PopBrowse';

export const PopBrowsePage = ({ onClose, isActive, isEditMode }) => {
  const { id } = useParams();
  const location = useLocation();
  const theme = location.state?.theme || '';
  return <PopBrowse onClose={onClose} isActive={isActive} isEditMode={isEditMode} id={id} theme={theme} />;
};
