import React, { Component, ComponentType, useState, useEffect } from "react";
import TokenService from '../services/token-service';
import { Link, useHistory } from "react-router-dom";
import './Header.css';

function Header(props) {
  const history = useHistory();
  const handleLogOut = () => {
    TokenService.clearAuthToken();
    props.setAuthenticated(false);
    history.push('/');
  }

  console.log(`Props.authenticated is: ${props.authenticated}`);
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="https://www.reddit.com/r/Whitehack/">
        SW
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/index">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chargen">
              Chargen
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/background">
              Background
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/API">
              API
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/charform">
              CharForm
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav navbar-nav mt-2 mt-md-0">
          <li className={`nav-item ${props.authenticated && "hidden"}`}>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className={`nav-item ${!props.authenticated && "hidden"}`}>
            <Link className="nav-link" to="/login" onClick={handleLogOut}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
