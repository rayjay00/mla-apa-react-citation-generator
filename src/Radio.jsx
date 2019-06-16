import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRadioInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Radio = ({ chooseStyle, style }) => (
  <StyledRadioInput>
    <label htmlFor='MLA'>
      MLA
      <input
        type='radio'
        name='MLA'
        id='MLA'
        value='MLA'
        checked={style === 'MLA'}
        onChange={chooseStyle}
      />
    </label>
    <label htmlFor='APA'>
      APA
      <input
        type='radio'
        name='APA'
        id='Chigago'
        value='APA'
        checked={style === 'APA'}
        onChange={chooseStyle}
      />
    </label>
  </StyledRadioInput>
);

Radio.propTypes = {
  chooseStyle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired
};

export default Radio;
