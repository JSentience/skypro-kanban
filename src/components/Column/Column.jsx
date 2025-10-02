import Card from '../Card/Card';
import {
  Cards,
  ColumnStyled,
  ColumnTitle,
  ColumnTitleP,
} from './Column.styled';

const Column = ({ title, cards, onOpenPopBrowse }) => {
  return (
    <ColumnStyled className="column">
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        {cards.map((card, index) => (
          <Card
            key={index}
            theme={card.theme}
            title={card.title}
            date={card.date}
            btnHref={card.btnHref}
            onOpenPopBrowse={onOpenPopBrowse}
          />
        ))}
      </Cards>
    </ColumnStyled>
  );
};

export default Column;
