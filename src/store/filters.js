import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { query: "" },
  reducers: {
    changedQuery: (state, action) => {
      return action.payload;
    },
  },
});

export const getFilters = (state) => state.filters;

export const { changedQuery } = slice.actions;

export default slice.reducer;
