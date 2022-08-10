/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';


const Modal = styled.div`
  text-align: center;
  background-color: whitesmoke;
  border: 1px solid #979797;
  border-radius: 20px;
  position: fixed;
  z-index: 20;
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const AuthorBooks = ({book, deleteBook}) => {
  // console.log(book);

  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Overlay onClick={() => setShow(false)}>
        <Modal>
          <h3 style={{ fontSize:"35px"}} className='button-55'>{book.title}</h3>
          <p style={{ padding:"20px"}}>{book.Description}</p>
        </Modal>
      </Overlay>
    );
  }

  return (
    <>
      <img onClick={() => setShow(true)} className='button-55' style={{ margin: "15px" }} src={book.image} alt="book-cover"></img>
      <button style={{ marginLeft:"-23px", width: "25px", height: "25px"}} onClick={() => deleteBook(book.title)}>x</button>
    </>
  );
};

export default AuthorBooks;



// <div>{book.title}</div>
// <img src={book.image} alt="book-cover"></img>