import {useCallback, useEffect, useState} from 'react';
import {Column} from '../Column/Column';
import Loader from '../Loader/Loader';
import {Container} from '../Wrapper.styled';
import {MainBlock, MainContent, MainStyled} from './Main.styled';

const Hero = ({loading, onOpenPopBrowse, fetchTasks: fetchTasksProp}) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const loadTasks = useCallback(async () => {
    try {
      const data = await fetchTasksProp();
      setTasks(data.tasks || []);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [fetchTasksProp]);


  useEffect(() => {
    if (!loading) {
      loadTasks();
    }
  }, [loading, loadTasks]);

  useEffect(() => {
    window.onTaskUpdated = loadTasks;
    window.onTaskCreated = loadTasks;
  }, [loadTasks]);

  const groupTasksByStatus = (taskList) => {
    const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];
    return statuses.map(status => ({
      title: status,
      cards: taskList.filter(task => task.status === status).map(task => ({
        id: task._id,
        theme: task.topic,
        title: task.title,
        date: new Date(task.date).toLocaleDateString('ru-RU'),
      }))
    }));
  };

  const columns = groupTasksByStatus(tasks);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <MainStyled>
          <Container>
            <MainBlock>
              {error && <p style={{color: 'red'}}>{error}</p>}
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
