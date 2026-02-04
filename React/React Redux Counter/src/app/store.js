import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feathers/counter/counterSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
