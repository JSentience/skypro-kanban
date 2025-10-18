import { useParams } from 'react-router-dom';
import { Card } from '../components/Card/Card';
import columns from '../../data';

export const CardPage = () => {
  const { id } = useParams();
  const cardId = parseInt(id);

  let cardData = null;
  for (const column of columns) {
    const foundCard = column.cards.find((card) => card.id === cardId);
    if (foundCard) {
      cardData = foundCard;
      break;
    }
  }

  if (!cardData) {
    return <div>Карточка не найдена</div>;
  }

  return <Card {...cardData} />;
};
