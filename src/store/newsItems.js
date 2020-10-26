import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { getCurrentUser } from "./currentUser";
import { getFilters } from "./filters";
import { requestNewsItems, approveNewsItems } from "../data/NewsItems";

const slice = createSlice({
  name: "newsItems",
  initialState: [],
  reducers: {
    createdMany: (state, action) => action.payload,
    created: (state, action) => {
      return [...state, action.payload];
    },
    deleted: (state, action) => {
      return state.filter((item) => action.payload !== item.id);
    },
    approved: (state, action) => {
      return [...state].map((item) =>
        item.id === action.payload
          ? { ...item, approved: !item.approved }
          : item
      );
    },
  },
});

export const loadNewsItems = (dispatch, state) => {
  const response = requestNewsItems();
  dispatch(slice.actions.createdMany(response));
};

export const approvedFunc = (id) => (dispatch, state) => {
  const response = approveNewsItems(id);
  if (response.success) dispatch(slice.actions.approved(id));
  else alert("Oh, something went wrong");
};

export const getNewsItems = (state) => state.newsItems;

export const getFilteredNewsItems = createSelector(
  [getNewsItems, getCurrentUser, getFilters],
  (newsItems, currentUser, filters) => {
    let newsItemsByUser = [...newsItems];
    if (currentUser && !currentUser.admin)
      newsItemsByUser = newsItems.filter(
        (item) =>
          item.approved || (!item.approved && item.author === currentUser.id)
      );
    else if (!currentUser)
      newsItemsByUser = newsItems.filter((item) => item.approved);

    if (!filters.query || filters.query.length < 1) return newsItemsByUser;

    const query = filters.query.toLowerCase();

    return newsItemsByUser.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );
  }
);

export const { createdMany, created, deleted, approved } = slice.actions;

export default slice.reducer;
