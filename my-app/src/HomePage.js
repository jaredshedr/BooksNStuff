/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton'
import AuthorList from './AuthorList.js'
import logo from './logo.jpeg'
import './App.css';

function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // console.log(user);
  return (
    <div className='home'>
      <ul className='home-nav'>
        <li><img style={{ marginTop:"5px", width:"175px", height: "200px"}} src={logo} alt="IMG" /></li>
        <li> <h3 style={{ fontSize: "38px", marginTop: "55px"}} className='login-form-title'>Welcome to BooksNstufF <i>{user.nickname}</i></h3></li>
        <li style={{ marginTop: "150px", marginRight: "17px"}}><LogoutButton /></li>
      </ul>
      <div>
        <AuthorList />
      </div>
    </div>
  );
}

export default HomePage;