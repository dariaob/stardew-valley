import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
          <span>
            {" "}
            <NavLink exact to="/about">
              About
            </NavLink>
          </span>
        </nav>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
