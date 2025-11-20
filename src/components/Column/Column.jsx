import { Card } from '../Card/Card';
import {
  Cards,
  ColumnStyled,
  ColumnTitle,
  ColumnTitleP,
} from './Column.styled';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

export const Column = ({ id, title, cards, onOpenPopBrowse }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <ColumnStyled ref={setNodeRef}>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy}>
          {cards.map((card) => (
            <Card
              key={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              id={card.id}
              onOpenPopBrowse={onOpenPopBrowse}
            />
          ))}
        </SortableContext>
      </Cards>
    </ColumnStyled>
  );
};
