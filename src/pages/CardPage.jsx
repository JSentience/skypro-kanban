import { useLocation, useParams } from 'react-router-dom';
import CardDesc from '../components/CardDesc/CardDesc';

export const CardPage = ({ onClose }) => {
  const { id } = useParams();
  const location = useLocation();
  const theme = location.state?.theme || '';
  return <CardDesc id={id} onClose={onClose} theme={theme} />;
};
