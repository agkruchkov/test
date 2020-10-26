import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as newsItemsActions from "./store/newsItems";
import { loggedIn, loggedOut } from "./store/currentUser";
import { Provider } from "react-redux";

import configureAppStore from "./store/store";

const history = createBrowserHistory();
const store = configureAppStore();

// store.subscribe(() => console.log("Store was changed!"));

// store.dispatch(newsItemsActions.created({ id: 1, title: "Lala" }));
// store.dispatch(newsItemsActions.deleted(1));
// store.dispatch(loggedIn({ login: "Admin" }));

// console.log(store.getState());

// { currentUser: null, newsItems: [] }

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
