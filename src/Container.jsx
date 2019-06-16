import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { stylesettings } from './StylesSettings';

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${props =>
    props.selected === 'MLA'
      ? stylesettings.mla.primary
      : stylesettings.apa.primary};
  width: auto;
`;

const Container = ({ style, children }) => {
  return <StyledContainer selected={style}>{children}</StyledContainer>;
};

Container.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  style: 'MLA'
};

export default Container;
