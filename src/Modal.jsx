import React from 'react';
import styled from 'styled-components';
import Citation from './Citation';
import { StyledSubmitButton, stylesettings } from './StylesSettings';
import PropTypes from 'prop-types';

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

const Modal = ({ modalClosed, citation, style }) => {
  return (
    <StyledModal
      role='dialog'
      aria-labelledby='dialog1Title'
      aria-describedby='dialog1Desc'
    >
      <StyledListHeading id='dialogTitle'>
        Here's your citation!
      </StyledListHeading>
      <Citation id='dialog1Desc' citationText={citation} style={style} />
      <StyledSubmitButton onClick={modalClosed}>x</StyledSubmitButton>
    </StyledModal>
  );
};

Modal.propTypes = {
  modalClosed: PropTypes.bool.isRequired,
  citation: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};

export default Modal;
