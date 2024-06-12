import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    text: "No todos yet"
  }],
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
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id == action.payload.id) {
          return { ...todo, text: action.payload.text }
        }
        return todo;
      })
    }
  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;