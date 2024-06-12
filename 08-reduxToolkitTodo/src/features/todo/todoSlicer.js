import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    {
      id: 1,
      text: "no todos yet",
    }
  ],
  text: ""
}



const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload;
      state.todos.push({
        id: nanoid(),
        text,
      })
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id == action.payload.id) {
          return { ...todo, text: action.payload.text }
        }
        return todo;
      })
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;