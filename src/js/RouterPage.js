import React from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Top250Page from "./Top250Page";
import USPage from "./USPage";
import SearchPage from "./SearchPage";

const RouterPage = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/top" component={Top250Page} />
        <Route path="/us" component={USPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </main>
  );
};

export default RouterPage;
