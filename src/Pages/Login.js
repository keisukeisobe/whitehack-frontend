import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";

function Login(props) {
  let history = useHistory();
  const handleLoginSuccess = (user_id) => {
    history.push("/characters");
    props.setAuthenticated(true);
  };

  const handleSubmitJwtAuth = (event) => {
    event.preventDefault();
    const { username, password } = event.target;
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        handleLoginSuccess(res.user_id);
      })
      .catch((res) => {});
  };

  return (
    <form className="login-form" onSubmit={handleSubmitJwtAuth}>
      <div className="user_name">
        <label htmlFor="LoginFormUserName"></label>
        <input
          className="input-username"
          require="true"
          name="username"
          id="LoginFormUserName"
          placeholder="username"
        ></input>
      </div>
      <div className="password">
        <label htmlFor="LoginFormPassword"></label>
        <input
          className="input-password"
          require="true"
          name="password"
          type="password"
          id="LoginFormPassword"
          placeholder="password"
        ></input>
      </div>
      <br />
      <button className="login-button" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
