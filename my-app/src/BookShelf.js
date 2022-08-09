import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Book from './Book';

const Modal = styled.div`
  text-align: center;
  background-color: whitesmoke;
  border: 1px solid #979797;
  border-radius: 20px;
  position: fixed;
  z-index: 20;
  width: 1450px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const BookShelf = ({mainAuthor}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [bookSearch, setBookSearch]= useState('');
  const [bookResults, setBookResults] = useState([])

  function bookSearcher() {
    // event.preventDefault();
    if (bookSearch === "") {
      return
    }
    axios.post('/authors/books', {user: user.nickname, book: bookSearch})
      .then((res) => setBookResults(res.data.items))
      .catch((err) => console.log(err))
  }

  return (
    <Modal>
      <h3>{mainAuthor.authorName}</h3>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control onChange={(event) => setBookSearch(event.target.value)}type="text" placeholder="Search for Books" />
        <button onClick={bookSearcher} className="button-55">Search</button>
      </Form.Group>
      {bookResults.length > 0 ? bookResults.map((item, index) => <Book book={item} key={index} />) : null}
    </Modal>
  );
};

export default BookShelf;
