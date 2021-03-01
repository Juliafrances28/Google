import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchFormpage from "./pages/SearchFormpage";
import SearchResultpage from "./pages/SearchResultpage";
import Nav from "./components/Nav/index";
// import Books from "./pages/Books";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchResultpage} />
          {/* <Route exact path="/" component={Books} /> */}
          <Route exact path="/searchResultpage" component={SearchResultpage} />
          <Route exact path="/SearchFormpage" component={SearchFormpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
