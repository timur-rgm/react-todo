import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todo";

export interface CounterState {
  todoList: TodoType[];
}

const initialState: CounterState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todoList.push(action.payload);
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((item) => item.id === action.payload);
      todo && (todo.isCompleted = !todo.isCompleted)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
    },
  },
});

export const { addTodo, changeTodoStatus, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
