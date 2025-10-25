import { useParams, useLocation } from 'react-router-dom';
import CardDesc from '../components/CardDesc/CardDesc';

export const CardPage = ({ onClose }) => {
  const { id } = useParams();
  const location = useLocation();
  const theme = location.state && location.state.theme ? location.state.theme : '';

  return <CardDesc id={id} onClose={onClose} theme={theme} />;
};
