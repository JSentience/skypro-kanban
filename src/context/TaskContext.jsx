import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  fetchTasks,
  createTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from '../services/api';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data.tasks || []);
      } catch {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const addTask = useCallback(
    async (task) => {
      try {
        const apiResponse = await createTask(task);
        const allTasks = apiResponse.tasks || [];
        const newTask = allTasks[allTasks.length - 1];

        setTasks(allTasks);
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        return newTask;
      } catch {
        const localTask = { ...task, _id: Date.now().toString() };
        const updatedTasks = [...tasks, localTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return localTask;
      }
    },
    [tasks],
  );

  const updateTask = async (updatedTask) => {
    try {
      await apiUpdateTask(updatedTask._id || updatedTask.id, updatedTask);
      const updatedTasks = tasks.map((task) =>
        (task._id || task.id) === (updatedTask._id || updatedTask.id)
          ? updatedTask
          : task,
      );
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch {
      const updatedTasks = tasks.map((task) =>
        (task._id || task.id) === (updatedTask._id || updatedTask.id)
          ? updatedTask
          : task,
      );
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const deleteTask = async (id) => {
    try {
      await apiDeleteTask(id);
      const filteredTasks = tasks.filter(
        (task) => (task._id || task.id) !== id,
      );
      setTasks(filteredTasks);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    } catch {
      const filteredTasks = tasks.filter(
        (task) => (task._id || task.id) !== id,
      );
      setTasks(filteredTasks);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loading, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
