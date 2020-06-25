import * as React from "react";
import { Component, ComponentType, useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import "./customrobo.css";
import Header from "../Header/Header";
import About from "../Pages/about";
import Chargen from "../Pages/chargen";

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
  // const [authenticated, setAuthenticated] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect( () => {

  // })

  return (
    <div className="App">
      <header className="Header">
        <Header />
      </header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/chargen">
          <Chargen />
        </Route>
      </Switch>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
