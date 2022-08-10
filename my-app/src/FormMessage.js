/* eslint-disable no-unused-vars */
import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';


const Modal = styled.div`
  text-align: center;
  background-color: whitesmoke;
  border: 1px solid #979797;
  border-radius: 20px;
  width: 1400px;
  margin: auto;
  margin-top: 63px;
`;

const FormMessage = ({ setAddBookModal ,authorForm, submitForm }) => {
  const [bookName, setBookName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');


  return (
    <Modal>
      <div className="container">
        <button style={{ float: "right", marginRight: "10px", marginTop: "5px" }} className="button-55" onClick={() => setAddBookModal(false)}>x</button>
        <form onSubmit={() => submitForm(bookName, phone, date, authorForm)} className="well form-horizontal">
          <fieldset>
            <legend>Sign Up For Text Notification</legend>

            <div className="form-group">
              <label className="col-md-4 control-label">Book Name</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input required onChange={(event) => setBookName(event.target.value)}  name="Book Name" placeholder="Book Name" className="form-control"  type="text" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Phone #</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                <input required onChange={(event) => setPhone(event.target.value)} name="phone" placeholder="(845)555-1212" className="form-control" type="text" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Date to Be Notified</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-time"></i></span>
                <input required onChange={(event) => setDate(event.target.value)} name="date" className="form-control" type="date" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Author</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-book"></i></span>
                <input disabled name="author" value={authorForm} className="form-control"  type="text" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label"></label>
              <div className="col-md-4">
                <button type="submit" className="button-55" >Send <span className="glyphicon glyphicon-send"></span></button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    </ Modal>
  );
};

export default FormMessage;