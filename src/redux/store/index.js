import { configureStore } from "@reduxjs/toolkit";
import gistListReducer from "../reducers/gistList";

export default configureStore({
  reducer: {
    gistList: gistListReducer,
  },
});
