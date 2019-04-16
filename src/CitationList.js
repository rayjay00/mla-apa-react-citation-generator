import React from 'react';
import Citation from './Citation';
import Container from './Container';
import { StyledListHeading } from './Modal';

const CitationList = ({ citationsPrevious, style }) => {
    return (
        <Container list={ 'true' } selected={ style }>
            <StyledListHeading>Your {style} Format Citations</StyledListHeading>
            {
                citationsPrevious.map((citation, index) => {
                    return <Citation key={ index } style={ style } citationText={ citation } />
                })
            }
        </Container>
    )
}

export default CitationList;