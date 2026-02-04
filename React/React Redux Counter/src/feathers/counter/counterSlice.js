import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incriment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    multiplay: (state) => {
      state.value *= state.value;
    },
    incrimentByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incriment, decrement, multiplay, incrimentByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
