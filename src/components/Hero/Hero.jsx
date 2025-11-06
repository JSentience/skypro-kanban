import { Column } from '../Column/Column';
import Loader from '../Loader/Loader';
import { Container } from '../Wrapper.styled';
import { MainBlock, MainContent, MainStyled } from './Main.styled';
import { useTasks } from '../../context/TaskContext';

const Hero = ({ onOpenPopBrowse }) => {
  const { tasks, loading } = useTasks();

  const groupTasksByStatus = (taskList) => {
    const statuses = [
      'Без статуса',
      'Нужно сделать',
      'В работе',
      'Тестирование',
      'Готово',
    ];
    return statuses.map((status) => ({
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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainStyled>
          <Container>
            <MainBlock>
              <MainContent>
                {columns.map((column, index) => (
                  <Column
                    key={index}
                    title={column.title}
                    cards={column.cards}
                    onOpenPopBrowse={onOpenPopBrowse}
                  />
                ))}
              </MainContent>
            </MainBlock>
          </Container>
        </MainStyled>
      )}
    </>
  );
};

export default Hero;
