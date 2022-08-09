/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Book = ({book, selectBook}) => {
  // console.log(book);
  return (
    <>
      <div>{book.volumeInfo.title}</div>
      {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book-cover"></img> : null}
      <button onClick={() => selectBook(book)} className="button-55" >Select</button>
    </>
  );
};

export default Book;
