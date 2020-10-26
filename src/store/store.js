import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUser";
import newsItemsReducer from "./newsItems";
import filtersReducer from "./filters";
import logger from "./middlewares/logger";

const configureAppStore = () =>
  configureStore({
    reducer: combineReducers({
      currentUser: currentUserReducer,
      newsItems: newsItemsReducer,
      filters: filtersReducer,
    }),
    middleware: [...getDefaultMiddleware(), logger],
  });

export default configureAppStore;
