import React from "react";
import ReactDOM from "react-dom";
import Anasayfa from "./components/Anasayfa.jsx";
import Yazisayfasi from "./components/Yazisayfasi.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Anasayfa />
    </Route>
    <Route path="/yazi/:id">
      <Yazisayfasi />
    </Route>
  </Router>,
  document.getElementById("root")
);
