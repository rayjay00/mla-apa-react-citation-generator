import React from 'react';
import styled from 'styled-components';

const StyledRadioInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Radio = ({ chooseStyle, style }) => {
    return (
        <StyledRadioInput>
            <label htmlFor="MLA">MLA</label>
            <input type="radio" 
            name="MLA" id="MLA" 
            value="MLA" 
            checked={ style === `MLA`} 
            onChange={ chooseStyle } />
            <label htmlFor="APA">APA</label>
            <input type="radio" 
            name="APA" 
            id="Chigago" 
            value="APA" 
            checked={ style === `APA`}  
            onChange={ chooseStyle } />
        </StyledRadioInput>
    )
}

export default Radio;

