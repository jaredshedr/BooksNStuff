import React, { useState, useEffect }  from 'react';

const Author = ({author, deleteAuthor, setAuthorModal, setMainAuthor}) => {
  console.log(author);
  return (
    <tr>
      <td onClick={() => {
        setMainAuthor(author)
        setAuthorModal(true)}} >{author.authorName} <button onClick={() => deleteAuthor(author.authorName)} className="button-55">x</button></td>
      <td></td>
      <td>LINK</td>
    </tr>
  );
};

export default Author;
