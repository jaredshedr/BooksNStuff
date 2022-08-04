/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function AuthorList() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [author, setAuthor]= useState('');
  const [authorModal, setAuthorModal] = useState(false);

  function authorSearcher() {
    axios.post('/authors', {user: user.nickname, author: author})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }


  return (
    <div>
      <input onChange={(event) => setAuthor(event.target.value)}/>
      <button onClick={authorSearcher}>Add Author</button>
    </div>
  );
}

export default AuthorList;