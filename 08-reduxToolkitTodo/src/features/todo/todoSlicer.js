import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    text: "No todos yet"
  }]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload.text;
      state.todos.push({
        id: nanoid(),
        text,
      })
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => id != action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id == action.payload) {
          return { ...todo, text: action.payload.text }
        }
        return todo;
      })
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;