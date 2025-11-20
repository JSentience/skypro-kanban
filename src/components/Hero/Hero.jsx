import { Column } from '../Column/Column';
import Loader from '../Loader/Loader';
import { Container } from '../Wrapper.styled';
import { MainBlock, MainContent, MainStyled } from './Main.styled';
import { useTasks } from '../../context/TaskContext';
import styled from 'styled-components';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { Card } from '../Card/Card';

const EmptyTasksMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const Hero = ({ onOpenPopBrowse }) => {
  const { tasks, loading, updateTask } = useTasks();
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const groupTasksByStatus = (taskList) => {
    const statuses = [
      'Без статуса',
      'Нужно сделать',
      'В работе',
      'Тестирование',
      'Готово',
    ];
    return statuses.map((status) => ({
      id: status,
      title: status,
      cards: taskList
        .filter((task) => task.status === status)
        .map((task) => ({
          id: task._id,
          theme: task.topic,
          title: task.title,
          date: new Date(task.date).toLocaleDateString('ru-RU'),
        })),
    }));
  };

  const columns = groupTasksByStatus(tasks);

  const findTaskById = (id) => {
    return tasks.find(task => task._id === id);
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Найти задачу и целевую колонку
    const activeTask = findTaskById(activeId);
    if (!activeTask) return;

    // Определить, куда перемещается задача
    const overColumn = columns.find(col => col.id === overId);
    if (overColumn) {
      // Перемещение в другую колонку
      if (activeTask.status !== overColumn.title) {
        const updatedTask = { ...activeTask, status: overColumn.title };
        updateTask(updatedTask);
      }
    }

    setActiveId(null);
  };

  const activeTask = activeId ? findTaskById(activeId) : null;

  return (
    <>
      {loading ? (
        <Loader />
      ) : tasks.length === 0 ? (
        <MainStyled>
          <Container>
            <MainBlock>
              <MainContent>
                <EmptyTasksMessage>
                  Новых задач нет
                </EmptyTasksMessage>
              </MainContent>
            </MainBlock>
          </Container>
        </MainStyled>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <MainStyled>
            <Container>
              <MainBlock>
                <MainContent>
                  <SortableContext items={columns.map(col => col.id)}>
                    {columns.map((column) => (
                      <Column
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        cards={column.cards}
                        onOpenPopBrowse={onOpenPopBrowse}
                      />
                    ))}
                  </SortableContext>
                </MainContent>
              </MainBlock>
            </Container>
          </MainStyled>
          <DragOverlay>
            {activeTask ? (
              <Card
                theme={activeTask.topic}
                title={activeTask.title}
                date={new Date(activeTask.date).toLocaleDateString('ru-RU')}
                id={activeTask._id}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </>
  );
};

export default Hero;
