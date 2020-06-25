import * as React from 'react';
import {Component, ComponentType, useState, useEffect} from 'react';
import {Route, BrowserRouter as Switch, Redirect} from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import './customrobo.css';
import TokenService from '../services/token-service';
import Header from '../Header/Header';

//if user is NOT authenticated, take them to the main page
function PrivateRoute(component: Component, authenticated: boolean){
  return (
    <Route 
      render = {
        props => authenticated === true ? 
        (<Component {...props} />): (<Redirect to= { {pathname: '/login', state: {from : props.location}} }/>)
      }
    />
  )
}

//if user is NOT authenticated, take them to the main page
function PublicRoute(component: Component, authenticated: boolean){
  return (
    <Route
      render = {
        props => authenticated === false ?
        (<Component {...props} />) : (<Redirect to={'/'} />)
      }
    />
  )
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    if (TokenService.hasAuthToken()) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [])

  return (
    <div className='App'>
      <header className='Header'>
        <Header authenticated={authenticated} />
      </header>
        <Switch>
        </Switch>
    </div>
  );
}

export default App;
