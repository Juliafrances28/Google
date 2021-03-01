import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar/index";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
