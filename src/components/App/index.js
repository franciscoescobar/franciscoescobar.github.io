import React from "react";
import Footer from "../Footer";
import Home from "../../pages/Home";
import Apps from "../../pages/Apps";
import Profile from "../../pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/apps/" component={Apps} />
        <Route path="/profile/" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
