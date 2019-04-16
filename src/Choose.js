import React from 'react';
import styled from 'styled-components';
import Radio from './Radio';

const StyledRadioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-weight: bold;
`;

const StyledHeading = styled.h1`
    color: white;
`;

const Choose = ({ chooseStyle, style }) => {
    return (
        <StyledRadioWrapper>
            <StyledHeading>{ style } Book Citation</StyledHeading>
            <Radio chooseStyle={ chooseStyle } style={ style } />
        </StyledRadioWrapper>
    )
}

export default Choose;