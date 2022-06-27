import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";
import TodoService from '../../services/todoService';


export const getTodos = createAsyncThunk(
  "todos/load",
  async () => {
    const res = await TodoService.getAll();
    return res.data;
  }
);

export const addTodo = createAsyncThunk (
  "todos/create",
  async ({title, description}) => {
    const todoId = uuidv4();
    const res = await TodoService.createTodo({title, description, todoId});
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
  initialState: {
    todos: [],
    },
    extraReducers: {
      [getTodos.fulfilled]: (state, action) => {
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