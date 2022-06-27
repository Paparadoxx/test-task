import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/todos";

const getUserTodos = () => {
  return axios.get(API_URL, { headers: authHeader()});
};

const getTodo = todoId => {
  return axios.get( API_URL+`/${todoId}`, { headers: authHeader()});
};

const createTodo = data => {
  return axios.post(API_URL, data, { headers: authHeader()});
};

const updateTodo = (todoId, data) => {
  return axios.put(API_URL+`/${todoId}`, data, { headers: authHeader()});
};

const removeTodo = todoId => {
  return axios.delete( API_URL+`/${todoId}`, { headers: authHeader()});
};

const todoService = {
  getUserTodos,
  getTodo,
  createTodo,
  updateTodo,
  removeTodo
};

export default todoService;