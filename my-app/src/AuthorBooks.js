/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const AuthorBooks = ({book, deleteBook}) => {
  // console.log(book);

  return (
    <>
      <img className='button-55' style={{ margin: "10px" }} src={book.image} alt="book-cover"></img>
      <button style={{ marginLeft:"-19px", width: "25px", height: "25px"}} onClick={() => deleteBook(book.title)}>x</button>
    </>
  );
};

export default AuthorBooks;



// <div>{book.title}</div>
// <img src={book.image} alt="book-cover"></img>