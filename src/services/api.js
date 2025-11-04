import axios from "axios";

const API_URL = 'https://wedev-api.sky.pro/api/kanban';
const AUTH_URL = 'https://wedev-api.sky.pro/api/user';

export const getToken = () => localStorage.getItem('kanbanToken');


export const login = async (login, password) => {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, {login, password}, {
      headers: {'Content-Type': null}
    });
    localStorage.setItem('kanbanToken', response.data.user.token);
    localStorage.setItem('userName', response.data.user.name);
    localStorage.setItem('userLogin', response.data.user.login);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Ошибка авторизации');
  }
};


export const register = async (login, password, name) => {
  try {
    const response = await axios.post(AUTH_URL, {login, password, name}, {
      headers: {'Content-Type': null}
    });
    localStorage.setItem('kanbanToken', response.data.user.token);
    localStorage.setItem('userName', response.data.user.name);
    localStorage.setItem('userLogin', response.data.user.login);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Ошибка регистрации');
  }
};


const authRequest = async (config) => {
  const token = getToken();
  if (!token) throw new Error('Требуется авторизация');

  try {
    const response = await axios({
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
        ...config.headers
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Ошибка запроса');
  }
};


export const fetchTasks = async () => authRequest({
  method: 'get',
  url: API_URL
});


export const fetchTaskById = async (id) => authRequest({
  method: 'get',
  url: `${API_URL}/${id}`
});

export const createTask = async (taskData) => authRequest({
  method: 'post',
  url: API_URL,
  data: taskData,
  headers: {'Content-Type': null}
});


export const updateTask = async (id, taskData) => authRequest({
  method: 'put',
  url: `${API_URL}/${id}`,
  data: taskData,
  headers: {'Content-Type': null}
});


export const deleteTask = async (id) => authRequest({
  method: 'delete',
  url: `${API_URL}/${id}`
});

export const getUser = async () => authRequest({
  method: 'get',
  url: AUTH_URL,
})
