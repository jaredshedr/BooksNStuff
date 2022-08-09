/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';

const Author = ({addBookTrack, setAddBookModal, author, deleteAuthor, setAuthorModal, setMainAuthor}) => {
  // console.log(author);


  return (
    <tr>
      <td><span onClick={() => {
        setMainAuthor(author)
        setAuthorModal(true)}}>{author.authorName}</span><button style={{ float: "right" }} onClick={() => deleteAuthor(author._id)} className="button-55">x</button></td>
      <td><button onClick={() => {
        addBookTrack(author.authorName)
        setAddBookModal(true)
        }} style={{float: "right"}} className="button-55">Add Book</button><button style={{float: "right"}} className="button-55">x</button></td>
      <td>LINK</td>
    </tr>
  );
};

export default Author;
