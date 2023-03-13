import {nanoid} from "nanoid";

export const createTodo = (title: string) => {
  return {
    id: nanoid(),
    title,
    isCompleted: false,
  }
}