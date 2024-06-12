import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    text: "",
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
  }
})

export const { changeText } = inputSlice.actions;
export default inputSlice.reducer;