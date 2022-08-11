/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Book from './Book';
import AuthorBooks from './AuthorBooks';

const Modal = styled.div`
  text-align: center;
  background-color: whitesmoke;
  border: 1px solid #979797;
  border-radius: 20px;
  width: 1450px;
  margin: auto;
  margin-top: 55px;
`;

const BookList = styled.div`
  display: flex;
  flex-direction: row:;
  flex-wrap: wrap;
`

const BookShelf = ({mainAuthor, getAll, setMainAuthor, setAuthorModal}) => {
  const { user } = useAuth0();
  const [bookSearch, setBookSearch]= useState('');
  const [bookResults, setBookResults] = useState(false)

  function bookSearcher() {
    // event.preventDefault();
    if (bookSearch === "") {
      return
    }
    axios.post('/authors/books', {user: user.nickname, book: bookSearch})
      .then((res) => setBookResults(res.data.items))
      .catch((err) => console.log(err))
  }

  function selectBook(book) {
    let temp = {user: user.nickname, author: mainAuthor.authorName, book: book}
    axios.post('/authors/addbook', temp)
      .then((res) => {
        mainAuthor.books = res.data;
        setBookResults(false)
      })
      .catch((err) => console.log(err))
  }

  function deleteBook(book) {
    let temp = {user: user.nickname, author: mainAuthor.authorName, book: book}
    axios.post('/authors/deletebook', temp)
    .then((res) => {
      setMainAuthor({...mainAuthor, books: res.data})
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {

  }, [mainAuthor])

  return (
    <Modal>
      <button style={{ float: "right", marginRight: "10px", marginTop: "5px" }} className="button-55" onClick={() => setAuthorModal(false)}>x</button>
      <h3>{mainAuthor.authorName}</h3>
      <Form.Group style={{ marginLeft: "15px", marginRight: "15px" }} className="mb-3" controlId="formGroupEmail">
        <Form.Control onChange={(event) => setBookSearch(event.target.value)}type="text" placeholder="Search for Books" />
        <button style={{ marginTop:"5px" , marginBottom: "75px"}} onClick={bookSearcher} className="button-55">Search</button>
      </Form.Group>
      <BookList>
        {bookResults.length > 0 ? bookResults.map((item, index) => <Book selectBook={selectBook} book={item} key={index} />) : null}
        {bookResults === false ? mainAuthor.books.map((item, index) => <AuthorBooks deleteBook={deleteBook} key={index} book={item} />) : null}
      </BookList>
    </Modal>
  );
};

export default BookShelf;
