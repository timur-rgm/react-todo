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
      todo && (todo.isCompleted = !todo.isCompleted);
    },
    editTodo: (state, action: PayloadAction<{ value: string; id: string }>) => {
      const todo = state.todoList.find((item) => item.id === action.payload.id);
      todo && (todo.title = action.payload.value);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    swapTodo: (
      state,
      action: PayloadAction<{ draggedId: string; droppedId: string }>
    ) => {
      const draggedIndex = state.todoList.findIndex(
        (item) => item.id === action.payload.draggedId
      );
      const droppedIndex = state.todoList.findIndex(
        (item) => item.id === action.payload.droppedId
      );

      const deletedEl = state.todoList.splice(draggedIndex, 1)[0];

      state.todoList = [
        ...state.todoList.slice(0, droppedIndex),
        deletedEl,
        ...state.todoList.slice(droppedIndex),
      ];
    },
  },
});

export const { addTodo, changeTodoStatus, editTodo, swapTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
