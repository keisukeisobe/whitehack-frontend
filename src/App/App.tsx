import * as React from "react";
import { Component, ComponentType, useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import "./customrobo.css";
import Header from "../Header/Header";
import Characters from "../Characters/Characters";
import Character from "../Character/Character";
import About from "../Pages/about";
import Login from '../Pages/Login';
import Chargen from "../Pages/chargen";
import API from "../Pages/api";
import EquipmentForm from "../Pages/charform";
import TokenService from "../services/token-service";

//if user is NOT authenticated, take them to the main page
function PrivateRoute(component: Component, authenticated: boolean) {
  return (
    <Route
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

//if user is NOT authenticated, take them to the main page
function PublicRoute(component: Component, authenticated: boolean) {
  return (
    <Route
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [authenticated]);

  return (
    <div className="App">
      <header className="Header">
        <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </header>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login" render={props => authenticated ? <Redirect to ={'/'}/> : <Login />}>
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <Route exact path="/chargen">
          <Chargen />
        </Route>
        <Route exact path="/api">
          <API />
        </Route>
        <Route exact path="/charform">
          <EquipmentForm />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route exact path="/characters/:character_id">
          <Character />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
