/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Author = ({getAll, addBookTrack, setAddBookModal, author, deleteAuthor, setAuthorModal, setMainAuthor}) => {
  // console.log(author);
  const { user } = useAuth0();

  function eraseNewRelease(author) {
    let temp = {author: author, user: user.nickname}
    // console.log(temp);
    axios.post('/erase/newrelease', temp)
      .then((res) => getAll())
      .catch((err) => console.log(err))
  }

  let dateTime = author.releases.length > 0 ? new Date(author.releases[0].date) : '';
  if (author.releases.length > 0) {
    dateTime.setDate(dateTime.getDate() + 1);
  }

  return (
    <tr>
      <td><span onClick={() => {
        setMainAuthor(author)
        setAuthorModal(true)}} style={{ fontSize: "19px" }} className='underline'>{author.authorName}</span><button style={{ float: "right" }} onClick={() => deleteAuthor(author._id)} className="button-55">x</button></td>
      <td>
        {author.releases.length > 0 ? <span style={{ fontSize: "17px", marginLeft: "10px" }}> {`${author.releases[0].title} -- ${dateTime.toString().slice(4, 15)}`}</span> : null}{ author.releases.length === 0 ? <button onClick={() => {
        addBookTrack(author.authorName)
        setAddBookModal(true)
        }} style={{float: "right"}} className="button-55">Add Book</button> : null}
        {author.releases.length > 0 ? <button onClick={() => eraseNewRelease(author.authorName)} style={{ marginLeft:"5px" }}className="button-55">x</button> : null}
      </td>
    </tr>
  );
};

export default Author;
