import React from 'react';
import styled from 'styled-components';
import { stylesettings } from './StylesSettings';
import Citation from './Citation';

const StyledModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:
    ${(props) => props.style === 'MLA' ? stylesettings.mla.primary 
    : stylesettings.apa.primary };
    padding: 1rem 0.5rem;
    border-radius: 10px;
`

export const StyledListHeading = styled.h2`
    color: white;
`;


const StyledClose = styled.span`
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
`
//I've decided to destructure the "style" prop although it is only used for the styled component. 
//Want to learn more about what to do there in the future
const Modal = ({ modalClosed, citation, style }) => {

    return (
        <StyledModal>
            <StyledClose onClick={ modalClosed }>x</StyledClose>
            <StyledListHeading>Here's your citation!</StyledListHeading>
            <Citation citationText={ citation } style={ style } />
        </StyledModal>
    )
}

export default Modal;