import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledSubmitButton } from './StylesSettings';

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  color: white;
  font-weight: bold;
  width: 100%;
`;

const StyledInput = styled.input`
  font-size: 1.25rem;
`;

const CitationForm = ({
  updateState,
  handleSubmit,
  firstVal,
  lastVal,
  titleVal,
  yearVal,
  cityVal,
  pubVal,
  stateVal,
  style
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledLabel htmlFor='first'>
        First Name:
        <StyledInput
          onChange={event => updateState('first', event.target.value)}
          value={firstVal || ''}
          type='text'
          required
          name='first'
          id='first'
        />
      </StyledLabel>
      <StyledLabel htmlFor='last'>
        Last Name:
        <StyledInput
          onChange={event => updateState('last', event.target.value)}
          value={lastVal || ''}
          type='text'
          required
          name='last'
        />
      </StyledLabel>
      <StyledLabel htmlFor='title'>
        Book Title:
        <StyledInput
          onChange={event => updateState('title', event.target.value)}
          value={titleVal || ''}
          type='text'
          required
          name='title'
        />
      </StyledLabel>
      <StyledLabel htmlFor='year'>
        Publishing Year:
        <StyledInput
          onChange={event => updateState('year', event.target.value)}
          value={yearVal || ''}
          type='text'
          required
          name='year'
          id='year'
        />
      </StyledLabel>
      <StyledLabel htmlFor='city'>
        Publishing City:
        <StyledInput
          onChange={event => updateState('city', event.target.value)}
          value={cityVal || ''}
          type='text'
          required
          name='city'
          id='city'
        />
      </StyledLabel>
      {style === 'APA' && (
        <StyledLabel htmlFor='state'>
          State:
          <StyledInput
            onChange={event => updateState('state', event.target.value)}
            value={stateVal || ''}
            type='text'
            required
            name='state'
            id='state'
          />
        </StyledLabel>
      )}
      <StyledLabel htmlFor='publisher'>
        Publisher:
        <StyledInput
          onChange={event => updateState('publisher', event.target.value)}
          value={pubVal || ''}
          type='text'
          required
          name='publisher'
          id='publisher'
        />
      </StyledLabel>
      <StyledSubmitButton selected={style} type='submit'>
        Submit
      </StyledSubmitButton>
    </form>
  );
};

CitationForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  firstVal: PropTypes.string,
  lastVal: PropTypes.string,
  titleVal: PropTypes.string.isRequired,
  yearVal: PropTypes.string,
  cityVal: PropTypes.string.isRequired,
  pubVal: PropTypes.string.isRequired,
  stateVal: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};

CitationForm.defaultProps = {
  firstVal: '',
  lastVal: '',
  yearVal: ''
};

export default CitationForm;
