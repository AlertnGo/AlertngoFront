import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Signup from "./pages/SignupPage";
import Page404 from "./pages/404";
import Sent from "./pages/Sent";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/me" component={Me} />
        <Route exact path="/me/signup" component={Signup} />
        <Route exact path="/sent" component={Sent} />
        <Route  path="*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
