/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Book = ({book, selectBook}) => {
  // console.log(book);


  if (book.volumeInfo.imageLinks) {
    return (
      <>
        {book.volumeInfo.imageLinks ? <img className='button-55' style={{ margin: "5px" }} src={book.volumeInfo.imageLinks.smallThumbnail} alt="book-cover"></img> : null}
        <button style={{marginTop:"125px" ,marginLeft: "-19px"}} onClick={() => selectBook(book)} className="button-55" >Select</button>
      </>
    );
  }
};

export default Book;
