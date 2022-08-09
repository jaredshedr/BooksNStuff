/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import SignupButton from './SignupButton'
import HomePage from './HomePage.js'
import logo from './logo.jpeg'

function LoginPage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // console.log(user);
  if (user) {
    return (
      <>
        <HomePage />
      </>
    )
  }
  return (
    <div className='login'>
      <div className='login-center'>
        <img style={{ width: "125px", height: "150px", marginBottom: "-106px", marginLeft: "-11px"}} src={logo} alt="IMG" />
        <h3 style={{marginLeft: "75px"}} className='login-form-title'>Welcome to BooksNstufF</h3>
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  );
}

export default LoginPage;
