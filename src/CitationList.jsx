import React from 'react';
import PropTypes from 'prop-types';
import Citation from './Citation';
import Container from './Container';
import { StyledListHeading } from './Modal';

const CitationList = ({ citationsPrevious, style }) => {
  console.log('styleinside', style);
  return (
    <Container style={style}>
      <StyledListHeading>Your {style} Format Citations</StyledListHeading>
      {citationsPrevious.map(citation => {
        return (
          <Citation key={citation} style={style} citationText={citation} />
        );
      })}
    </Container>
  );
};

CitationList.propTypes = {
  citationsPrevious: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired
    })
  ).isRequired,
  style: PropTypes.string.isRequired
};

export default CitationList;
