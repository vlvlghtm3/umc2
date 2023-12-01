import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/loginSlice.js";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
export default store;