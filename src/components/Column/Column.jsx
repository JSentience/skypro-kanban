import { Card } from '../Card/Card';
import {
  Cards,
  ColumnStyled,
  ColumnTitle,
  ColumnTitleP,
} from './Column.styled';

export const Column = ({ title, cards, onOpenPopBrowse }) => {
  return (
    <ColumnStyled>
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
            id={card.id}
            onOpenPopBrowse={onOpenPopBrowse}
          />
        ))}
      </Cards>
    </ColumnStyled>
  );
};
