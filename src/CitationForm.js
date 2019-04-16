import React from 'react';
import styled from 'styled-components';
import { stylesettings } from './StylesSettings';

const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1rem 0;
    color: white;
    font-weight: bold;
    width: 100%;
`;

const StyledInput = styled.input`
    font-size: 1.25rem;
`;

const StyledSubmitButton = styled.button`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px auto;
  color: #fff;
  position: relative;
  border: 0;
  display: flex;
  background-color: ${stylesettings.mla.primary};
  box-shadow: 0px 5px 0px 0px ${stylesettings.mla.primary};
    &:hover {
        background-color: ${stylesettings.mla.primary};
    }
    &:active {
        transform: translate(0px, 5px);
        box-shadow: 0px 1px 0px 0px;
    }
`;

const CitationForm = ({ updateState, handleSubmit, firstVal, lastVal, titleVal, yearVal, cityVal, pubVal, stateVal, style }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <StyledLabel>
                First Name:
                <StyledInput onChange={(event) => updateState('first', event.target.value)} value={ firstVal || ''} type="text" required name="first" />
            </StyledLabel>
            <StyledLabel>
                Last Name:
                <StyledInput onChange={(event) => updateState('last', event.target.value) } value={ lastVal || ''} type="text" required name="last" />
            </StyledLabel>
            <StyledLabel>
                Book Title:
                <StyledInput onChange={(event) => updateState('title', event.target.value) } value={ titleVal || ''} type="text" required name="title" />
            </StyledLabel>
            <StyledLabel>
                Publishing Year:
                <StyledInput onChange={(event) => updateState('year', event.target.value) } value={ yearVal || ''} type="text" required name="year" />
            </StyledLabel>
            <StyledLabel>
                Publishing City:
                <StyledInput onChange={ (event) => updateState('city', event.target.value) } value={ cityVal || ''} type="text" required name="city" />
            </StyledLabel>
            { style === "APA" &&
                <StyledLabel>
                    State:
                    <StyledInput onChange={ (event) => updateState('state', event.target.value) } value={ stateVal || ''} type="text" required name="state" />
                </StyledLabel>
            }
            <StyledLabel>
                Publisher:
                <StyledInput onChange={ (event) => updateState('publisher', event.target.value) } value={ pubVal || ''} type="text" required name="publisher" />
            </StyledLabel>
            <StyledSubmitButton selected={ style } type="submit">Submit</StyledSubmitButton>
        </form>
    )

}

export default CitationForm;