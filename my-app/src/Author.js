/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';

const Author = ({author, deleteAuthor, setAuthorModal, setMainAuthor}) => {
  // console.log(author);
  return (
    <tr>
      <td><span onClick={() => {
        setMainAuthor(author)
        setAuthorModal(true)}}>{author.authorName}</span><button onClick={() => deleteAuthor(author._id)} className="button-55">x</button></td>
      <td></td>
      <td>LINK</td>
    </tr>
  );
};

export default Author;
