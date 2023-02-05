import React from 'react';
import Backdrop from './Backdrop';
import { BackdropStyled, ModalStyled } from './Modal.styled.js';

export default function Modal() {
  return (
    <BackdropStyled>
      <ModalStyled onClick={e => e.stopPropagation()}>
        <p>
          Thanks for contacting us!!!We will try to respond as fast as possible
        </p>
      </ModalStyled>
    </BackdropStyled>
  );
}
