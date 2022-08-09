import React, { useState, useEffect }  from 'react';

const Author = ({author, deleteAuthor}) => {
  console.log(author);
  return (
    <tr>
      <td>{author.authorName} <button onClick={() => deleteAuthor(author.authorName)} className="button-55">x</button></td>
      <td></td>
      <td>LINK</td>
    </tr>
  );
};

export default Author;
