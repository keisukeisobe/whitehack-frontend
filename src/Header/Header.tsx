import React, {Component, ComponentType, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function Header() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="https://www.reddit.com/r/Whitehack/">SW</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarCollapse" aria-controls="navbarCollapse"
          aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/index" />
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" />
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" />
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;