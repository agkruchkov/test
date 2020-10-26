import { createSlice } from "@reduxjs/toolkit";
import { requestLogout } from "../data/Users";

const slice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    loggedIn: (state, action) => {
      return action.payload;
    },
    loggedOut: (state, action) => {
      return null;
    },
  },
});

//эта функция называется селектором
export const getCurrentUser = (state) => state.currentUser;

export const messLogOut = (dispatch, state) => {
  const response = requestLogout();
  dispatch(slice.actions.loggedOut());
};

export const { loggedIn, loggedOut } = slice.actions;

export default slice.reducer;
