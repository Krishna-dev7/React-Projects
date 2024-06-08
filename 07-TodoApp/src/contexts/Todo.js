import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "No todos yet",
      isDone: false
    }
  ],
  addTodo: (todoMsg) => { },
  deleteTodo: (id) => { },
  updateTodo: (id, todoMsg) => { },
  toggleDone: (id) => { }
});

export const TodoProvider = TodoContext.Provider;
export default function useTodo() {
  return useContext(TodoContext);
}