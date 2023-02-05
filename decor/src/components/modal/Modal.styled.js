import styled from 'styled-components';

export const BackdropStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 130vh;
  background: #000000e1;
  display: grid;
  place-content: center;
`;

export const ModalStyled = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  place-content: center;
  padding: 0 1.5rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  background-color: #ccd0c3;
  color: white;
  font-size: 22px;
`;
