import React from 'react';
import ReactDOM from 'react-dom';
import { BackdropStyled } from './Modal.styled.js';

export default function Backdrop({ children }) {
  return ReactDOM.createPortal(
    <BackdropStyled>{children}</BackdropStyled>,
    document.getElementById('portal')
  );
}
