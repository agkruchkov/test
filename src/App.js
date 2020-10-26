import React, { useEffect, useState } from "react";
import "./Sass/main.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadNewsItems } from "./store/newsItems";
import LoginForm from "./components/LoginForm";
import Menu from "./components/Menu";
import News from "./components/News";
import Home from "./components/Home";

function App(props) {
  const { history } = props;
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);
  
  const handleOpenModal = () => setIsShowing(true);

  useEffect(() => {
    dispatch(loadNewsItems);
  }, []);

  return (
    <div className="App">
      <header className="header-site container clearfix">
        <Menu openModalHandler={handleOpenModal} />
      </header>

      <main className="middle-site clearfix container">
        <Switch>
          <Route
            history={history}
            path="/home"
            render={(props) => <Home {...props} />}
          />
          <Route
            history={history}
            path="/news"
            render={(props) => (
              <News
                {...props}
              />
            )}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </main>

      {isShowing && (
        <LoginForm
          setIsShowing={setIsShowing}
          isShowing={isShowing}
        />
      )}
    </div>
  );
}

export default App;
