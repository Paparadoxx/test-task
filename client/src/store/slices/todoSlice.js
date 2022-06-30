import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TodoService from '../../services/todoService';

const initialState = [];

export const getTodos = createAsyncThunk(
  "todos/load",
  async ({UserId}) => {
    const res = await TodoService.getAll(UserId);
    return res.data;
  }
);

export const addTodo = createAsyncThunk (
  "todos/create",
  async ({title, description, userId, todoId}) => {
    const res = await TodoService.createTodo({userId, title, description, todoId});
    return res.data;
    }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async ({ todoId, data }) => {
    const res = await TodoService.updateTodo(todoId, data);
    return res.data;
    }
  );

  export const removeTodo = createAsyncThunk(
    "todos/delete",
    async ({ todoId }) => {
      await TodoService.removeTodo(todoId);
      return { todoId };
    }
  );

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      // state.todos = action.payload.todos;
      return [...action.payload];
    },
    [addTodo.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updateTodo.fulfilled]: (state, action) => {
      const index = state.findIndex(todo => todo.todoId === action.payload.todoId);
        state[index] = {
        ...state[index],
        ...action.payload,
        };
    },
    [removeTodo.fulfilled]: (state, action) => {
      let index = state.findIndex(({ todoId }) => todoId === action.payload.todoId);
      state.splice(index, 1);
    },
  },
});

export default todoSlice.reducer;