import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <AppRoutes />
          <ToastContainer />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
