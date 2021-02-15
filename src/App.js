import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchFormpage from "./pages/SearchFormpage";
import SearchResultpage from "./pages/SearchResultpage";
import Navbar from "./components/Navbar/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchResultpage} />
          <Route exact path="/searchResult" component={SearchResultpage} />
          <Route exact path="/SearchForm" component={SearchFormpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
