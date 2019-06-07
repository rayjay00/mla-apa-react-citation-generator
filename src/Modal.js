import React from 'react';
import styled from 'styled-components';
import Citation from './Citation';
import { StyledSubmitButton, stylesettings } from './StylesSettings';

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${stylesettings.extra.modalbg};
  padding: 1rem 0.5rem;
  border-radius: 10px;
`;

export const StyledListHeading = styled.h2`
  color: white;
  display: inline;
  padding-left: 1rem;
`;
//I've decided to destructure the "style" prop although it is only used for the styled component.
//Want to learn more about what to do there in the future
const Modal = ({ modalClosed, citation, style }) => {
  return (
    <StyledModal
      role="dialog"
      aria-labelledby="dialog1Title"
      aria-describedby="dialog1Desc"
    >
      <StyledListHeading id="dialogTitle">
        Here's your citation!
      </StyledListHeading>
      <Citation id="dialog1Desc" citationText={citation} style={style} />
      <StyledSubmitButton onClick={modalClosed}>x</StyledSubmitButton>
    </StyledModal>
  );
};

export default Modal;
