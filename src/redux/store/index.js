import { configureStore } from "@reduxjs/toolkit";
import gistListReducer from "../reducers/gistList";
import search from "../reducers/search";

export default configureStore({
  reducer: {
    gistList: gistListReducer,
    search: search,
  },
});
