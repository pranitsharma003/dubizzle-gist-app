import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    EnterText: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default searchSlice.reducer;
