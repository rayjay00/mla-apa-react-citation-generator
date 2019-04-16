import React from 'react';
import styled from 'styled-components';
import { stylesettings } from './StylesSettings';

const StyledContainer = styled.div`
    margin: 0 auto;
    margin-top: 10vh;
    padding: 1rem;
    border-radius: 10px;
    background-color: 
    ${(props) => props.list ? stylesettings.mla.primary
    : (props.selected === "MLA" ? stylesettings.mla.secondary : stylesettings.apa.primary )};
    @media screen and (min-width: 667px) {
        width: 75%;
    }
    @media screen and (min-width: 768px) {
        width: 40%;
    }
    @media screen and (min-width: 1261px) {
        width: 25%;
    }
`;

const Container = (props) => {
    return (
        <StyledContainer list={ props.list } selected={ props.style }>
            {props.children}
        </StyledContainer>
    )
}

export default Container;