/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';

const Author = ({addBookTrack, setAddBookModal, author, deleteAuthor, setAuthorModal, setMainAuthor}) => {
  // console.log(author);

  let dateTime = author.releases.length > 0 ? new Date(author.releases[0].date) : '';

  return (
    <tr>
      <td><span onClick={() => {
        setMainAuthor(author)
        setAuthorModal(true)}}>{author.authorName}</span><button style={{ float: "right" }} onClick={() => deleteAuthor(author._id)} className="button-55">x</button></td>
      <td>{author.releases.length > 0 ? <span>{`${author.releases[0].title} / ${dateTime.toString().slice(4, 15)}`}</span> : null}{ author.releases.length === 0 ? <button onClick={() => {
        addBookTrack(author.authorName)
        setAddBookModal(true)
        }} style={{float: "right"}} className="button-55">Add Book</button> : null}{author.releases.length > 0 ? <button style={{ marginLeft:"5px" }}className="button-55">x</button> : null}</td>
    </tr>
  );
};

export default Author;
