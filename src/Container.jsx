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
      ? stylesettings.mla.secondary
      : stylesettings.apa.primary};
  @media screen and (min-width: 667px) {
    width: 75%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1261px) {
    width: auto;
  }
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
