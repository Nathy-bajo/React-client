import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Test from './Test';
import Action from './Action';
import Reset from './Reset';
import Forgot from './Forgot';
import Email from './Email';
import { checkTokenValidity } from "./utils";

function App() {
  const token = localStorage.getItem("door_token")

  // checkTokenValidity(token)

  return (
    <div className="app">
      <h1>Open the door from your phone ('-')</h1>
      <BrowserRouter>
        <Switch >
          <Route component={Test} exact path="/" />
          <Route component={Action} path="/action" />
          <Route component={Reset} path="/reset" />
          <Route component={Forgot} path="/forgot" />
          <Route component={Email} path="/email" />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
