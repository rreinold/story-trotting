import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import List from "./List";
import Detail from "./Detail";
import NavbarHeader from "./components/Navbar";

const BasicExample = () => (
  <Router>
    <div>
      <NavbarHeader />

      <Route exact path="/" component={App} />
      <Route path="/list" component={List} />
      <Route path="/home" component={App} />
      <Route path="/detail" component={Detail} />
    </div>
  </Router>
);

export default BasicExample;