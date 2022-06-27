import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
    message: messageReducer
  },
  devTools: true
});