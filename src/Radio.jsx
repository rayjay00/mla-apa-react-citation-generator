import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRadioInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRadioLabel = styled.label`
  margin: 0 1rem;
`;

const Radio = ({ chooseStyle, style }) => (
  <StyledRadioInput>
    <StyledRadioLabel htmlFor='MLA'>
      MLA
      <input
        type='radio'
        name='MLA'
        id='MLA'
        value='MLA'
        checked={style === 'MLA'}
        onChange={chooseStyle}
      />
    </StyledRadioLabel>
    <StyledRadioLabel htmlFor='APA'>
      APA
      <input
        type='radio'
        name='APA'
        id='Chigago'
        value='APA'
        checked={style === 'APA'}
        onChange={chooseStyle}
      />
    </StyledRadioLabel>
  </StyledRadioInput>
);

Radio.propTypes = {
  chooseStyle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired
};

export default Radio;
