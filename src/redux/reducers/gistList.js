import { createSlice } from "@reduxjs/toolkit";

export const gistListSlice = createSlice({
  name: "gistList",
  initialState: [],
  reducers: {
    Save: (state, action) => {
      return (state = action.payload);
    },
    GetList: (state, action) => {
      return state;
    },
  },
});

export default gistListSlice.reducer;
