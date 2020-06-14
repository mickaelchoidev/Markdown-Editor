import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./screen/Home";
import Editor from "./screen/Editor";
import Footer from "./component/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/editor">
          <Editor />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
