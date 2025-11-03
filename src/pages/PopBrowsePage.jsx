import {useLocation, useParams} from 'react-router-dom';
import PopBrowse from '../components/PopBrowse/PopBrowse';

export const PopBrowsePage = ({ onClose, isActive }) => {
  const { id } = useParams();
  const location = useLocation();
  const theme = location.state?.theme || '';
  return <PopBrowse onClose={onClose} isActive={isActive} id={id} theme={theme} />;
};
