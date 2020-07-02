import React, { useState, useEffect } from "react";
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';

function Login(){  
  const handleLoginSuccess = (user_id) => {
    const { history } = this.props;
    history.push('/');
  };

  const handleSubmitJwtAuth = (event) => {
    event.preventDefault();
    const {username, password} = event.target;
    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = '';
        password.value='';
        TokenService.saveAuthToken(res.authToken);
        handleLoginSuccess(res.user_id);
      })
      .catch(res => {

      });
  };

    return (
      <form>
        
      </form>
    );
}

export default Login;