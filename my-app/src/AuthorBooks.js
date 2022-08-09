/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const AuthorBooks = ({book, deleteBook}) => {
  // console.log(book);

  const [show, setShow] = useState(false);


  const handleShow = () => setShow(show === true ? false : true);

  return (
    <>
      <img style={{ margin: "5px" }} onClick={handleShow} src={book.image} alt="book-cover"></img>
      <button style={{ marginLeft:"-10px", width: "25px", height: "25px"}} onClick={() => deleteBook(book.title)}>x</button>
      <Offcanvas style={{backgroundColor:"whitesmoke"}} show={show}>
        <Offcanvas.Header>
          <Offcanvas.Title><b>{book.title}</b></Offcanvas.Title>
        </Offcanvas.Header >
        <Offcanvas.Body>
          {book.Description}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AuthorBooks;



// <div>{book.title}</div>
// <img src={book.image} alt="book-cover"></img>