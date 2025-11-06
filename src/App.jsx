import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
