/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const AuthorBooks = ({book}) => {
  // console.log(book);

  const [show, setShow] = useState(false);


  const handleShow = () => setShow(show === true ? false : true);

  return (
    <>
      <img onClick={handleShow} src={book.image} alt="book-cover"></img>
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