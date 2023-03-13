import { RootState } from '../store';
import { TodoType } from '../../types/todo';

export const getAllTodos = (state: RootState): TodoType[] =>
  state.todo.todoList;

export const getActiveTodos = (state: RootState): TodoType[] =>
  state.todo.todoList.filter((item) => item.isCompleted === false);

export const getCompletedTodos = (state: RootState): TodoType[] =>
  state.todo.todoList.filter((item) => item.isCompleted === true);
