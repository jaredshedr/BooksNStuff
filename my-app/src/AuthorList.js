/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Author from './Author'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import './App.css';
import BookShelf from './BookShelf';
import FormMessage from './FormMessage'

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

function AuthorList() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [author, setAuthor]= useState('');
  const [authorModal, setAuthorModal] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [mainAuthor, setMainAuthor] = useState('');
  const [addBookModal, setAddBookModal] = useState(false);
  const [authorForm, setAuthorForm] = useState('');

  function authorSearcher() {
    event.preventDefault();
    if (author === "") {
      return
    }
    axios.post('/authors', {user: user.nickname, author: author})
      .then((res) => getAll())
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAll();
  }, [user])

  function getAll() {
    axios.get(`/authors?user=${user.nickname}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err))
  }

  function deleteAuthor(authorName) {
    let temp = {user: user.nickname, author: authorName }
    axios.delete('/authors', { data: temp })
      .then((response) => { getAll() })
      .catch(err => console.log('error deleting', err))
  }

  function addBookTrack(author) {
    setAuthorForm(author);
  }

  function submitForm(bookName, phone, date, author) {
    event.preventDefault()
    setAddBookModal(false);

    let temp = {user: user.nickname, bookName: bookName, phone: phone, date: date, author: author}
    axios.post('/messages', temp)
      .then((res) => getAll())
      .catch((err) => console.log(err))
  }

  if (authorModal) {
    return (
      <div>
        <BookShelf setAuthorModal={setAuthorModal} getAll={getAll} mainAuthor={mainAuthor} setMainAuthor={setMainAuthor}/>
      </div>
    )
  }
  if (addBookModal) {
    return (
      <div>
        <FormMessage setAddBookModal={setAddBookModal} submitForm={submitForm} authorForm={authorForm}/>
      </div>
    )
  }
  return (
    <div>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{ marginTop: "5px" }} >Add Author</Form.Label>
        <Form.Control onChange={(event) => setAuthor(event.target.value)} type="text" placeholder="Brandon Sanderson" />
        <button style={{ marginBottom: "5px", marginTop: "5px" }} className="button-55" onClick={authorSearcher}>Add Author</button>
      </Form.Group>
      <Table bordered hover variant="dark">
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Upcoming Releases</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((item, index) => <Author addBookTrack={addBookTrack} setAddBookModal={setAddBookModal} setMainAuthor={setMainAuthor} setAuthorModal={setAuthorModal} deleteAuthor={deleteAuthor} key={index} author={item}/>)}
        </tbody>
      </Table>
    </div>
  );
}

export default AuthorList;