import React, {Component, ComponentType, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Header(props: {authenticated: boolean}) {
  console.log(props.authenticated);
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
        </ul>

        <ul className="navbar-nav navbar-nav mt-2 mt-md-0">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
