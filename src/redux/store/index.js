import { configureStore } from "@reduxjs/toolkit";
import { gistListReducer } from "../reducers";

export default configureStore({
  reducer: {
    gistList: gistListReducer,
  },
});
