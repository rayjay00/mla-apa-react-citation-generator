import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Modal = ({ modalClosed, citation, style }) => {
  return (
    <StyledModal
      role='dialog'
      aria-labelledby='dialog1Title'
      aria-describedby='dialog1Desc'
    >
      <StyledListHeading id='dialogTitle'>
        Here&apos;s your citation!
      </StyledListHeading>
      <Citation id='dialog1Desc' citationText={citation} style={style} />
      <StyledSubmitButton onClick={modalClosed}>Close</StyledSubmitButton>
    </StyledModal>
  );
};

Modal.propTypes = {
  modalClosed: PropTypes.func.isRequired,
  citation: PropTypes.shape({
    last: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  }).isRequired,
  style: PropTypes.string.isRequired
};

export default Modal;
