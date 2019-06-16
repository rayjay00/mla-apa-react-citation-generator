import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCitation = styled.p`
  font-size: 1rem;
  color: white;
`;

const StyledTitle = styled.span`
  font-style: italic;
`;

const Citation = ({ citationText, style }) => {
  const mlaCitationFormat = (
    <StyledCitation>
      {`${citationText.last}, `}
      {`${citationText.first}. `}
      <StyledTitle>{`${citationText.title}. `}</StyledTitle>
      {`${citationText.publisher}, `}
      {`${citationText.year}.`}
    </StyledCitation>
  );

  const apaCitationFormat = (
    <StyledCitation>
      {`${citationText.last}, `}
      {`${citationText.first.split('')[0]}. `}
      {`(${citationText.year}). `}
      <StyledTitle>{`${citationText.title}. `}</StyledTitle>
      {`${citationText.city}${citationText.state ? ',' : ': '}
        ${citationText.state && `${citationText.state}: `}`}
      {`${citationText.publisher}.`}
    </StyledCitation>
  );

  return (
    <div>{style === 'MLA' ? { mlaCitationFormat } : { apaCitationFormat }}</div>
  );
};

Citation.propTypes = {
  citationText: PropTypes.shape({
    last: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  style: PropTypes.string.isRequired
};

export default Citation;
