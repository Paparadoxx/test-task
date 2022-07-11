import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TodoService from "../../services/todoService";


export const getTodos = createAsyncThunk(
  "todos/load",
  async function (userId, {rejectWithValue}) {
    try {
      const response = await TodoService.getUserTodos(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  "singleTodo/load",
  async function (todoId) {
    const res = await TodoService.getTodo(todoId);
    return res.data;
  }
)

export const addTodo = createAsyncThunk(
  "todos/create",
  async function ({ title, description, userId, todoId }) {
    const res = await TodoService.createTodo({ userId, title, description, todoId });
    return res.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async function ({ todoId, data }) {
    const res = await TodoService.updateTodo(todoId, data);
    return res.data;
  }
);

export const removeTodo = createAsyncThunk(
  "todos/delete",
  async function ({todoId}, {rejectWithValue, dispatch}) {
    try {
      const response =  await TodoService.removeTodo(todoId);
   if (!response.data.status===200) {
    throw new Error("Ошибка при удалении задачи");
   }
  } catch (error) {
    return rejectWithValue(error.message);
  }
})
  
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  
  extraReducers: {

  [getTodos.fulfilled]: (state, action) => {
    state.todos = action.payload.todos;
  },
  [addTodo.fulfilled]: (state, action) => {
    state.todos.push(action.payload);
  },
  [updateTodo.fulfilled]: (state, action) => {
    const index = state.todos.todos.find(todo => todo.todoId === action.payload.todoId);
    state.todos.todos[index] = {
      ...state.todos.todos[index],
      ...action.payload,
    };
  },
  [removeTodo.fulfilled]: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.todoId !== action.meta.arg.todoId);
    },   
  }
});

export default todoSlice.reducer;
