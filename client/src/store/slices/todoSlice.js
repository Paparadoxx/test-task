import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
              id: uuidv4(),
              title: action.payload.title,
              description: action.payload.description,
            });
        },
        // updateTodo(state, action) {
        //     const updateTodo = state.todos.find(todo => todo.id === action.payload.id);
        //     updateTodo. = 
        // },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
});

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;