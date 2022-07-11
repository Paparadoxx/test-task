import axios from "axios";


const API_URL = "http://localhost:8000/user";

const getUserTodos = (userId) => {
  return axios.get(API_URL +`/todos/${userId}`)
};

const getTodo = todoId => {
  return axios.get(API_URL+`/todo/${todoId}`);
};

const createTodo = data => {
  return axios.post(API_URL+'/todos', data);
};

const updateTodo = (todoId, data) => {
  return axios.put(API_URL+`/todos/${todoId}`, data);
};

const removeTodo = todoId => {
  return axios.delete(API_URL+`/todos/${todoId}`);
};

const todoService = {
  getUserTodos,
  getTodo,
  createTodo,
  updateTodo,
  removeTodo
};

export default todoService;
