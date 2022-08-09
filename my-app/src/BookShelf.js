import React, { useState, useEffect }  from 'react';
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

const BookShelf = () => {

  return (
    <Modal>

    </Modal>
  );
};

export default BookShelf;
