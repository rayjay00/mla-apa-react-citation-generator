import React, { useState } from 'react';
import styled from 'styled-components';
import CitationList from './CitationList';
import Container from './Container';
import Choose from './Choose';
import CitationForm from './CitationForm';
import Modal from './Modal';

const StyledWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 551px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 1500px) {
    width: 75%;
  }
`;

const StyledAbout = styled.p`
  text-align: center;
  font-weight: bold;
  color: white;
  a {
    color: white;
  }
`;

const App = () => {
  //  First time using hooks

  //  Set up the state for MLA or APA - we will start with MLA
  const [style, setStyle] = useState('MLA');

  // Setting up our form state for the citation form.
  const [formState, setFormState] = useState({
    first: '',
    second: '',
    title: '',
    year: '',
    city: '',
    state: '',
    publisher: ''
  });

  //  This is an array of the previous citations. This will be used in the CitationsList component to view previous citations.
  const [citationsPrevious, setCitationsPrevious] = useState([]);

  // Did we check a citation yet? This controls the modal, which showModal fires off some other functions.
  const [modal, showModal] = useState(false);

  // This will toggle the style of citation that will be shown in modal, text for the type of citation, but will also toggle back and forth previous citations between formats.
  const chooseStyle = event => {
    setStyle(event.target.value);
  };

  // This function is passed to the form component itself and will set the state of the inputs onChange
  const updateState = (key, value) => {
    setFormState(state => ({
      ...state,
      [key]: value
    }));
  };

  // The 'main' function that runs the citation and sets the citation object
  const handleSubmit = event => {
    event.preventDefault();
    // We need to show the modal.
    showModal(true);
  };

  // when we close the modal we want to show
  const modalClosed = () => {
    showModal(false);
    // next we need to set the whole state of the object
    setCitationsPrevious([...citationsPrevious, formState]);
    // we reset the state once the modal closes
    setFormState({
      first: '',
      last: '',
      title: '',
      year: '',
      city: '',
      state: '',
      publisher: ''
    });
  };

  return (
    <StyledWrapper>
      <Container style={style}>
        <Choose chooseStyle={chooseStyle} style={style} />
        <StyledAbout>
          <a href='https://www.ryanjordal.me'>Built by Ryan</a>. See it
          <a href='https://www.github.com/rayjay00'> here on GitHub.</a>
        </StyledAbout>
        <CitationForm
          handleSubmit={handleSubmit}
          updateState={updateState}
          firstVal={formState.first}
          lastVal={formState.last}
          titleVal={formState.title}
          yearVal={formState.year}
          cityVal={formState.city}
          stateVal={formState.state}
          pubVal={formState.publisher}
          style={style}
        />
      </Container>
      {citationsPrevious.length > 0 && (
        <CitationList style={style} citationsPrevious={citationsPrevious} />
      )}
      {modal && (
        <Modal modalClosed={modalClosed} style={style} citation={formState} />
      )}
    </StyledWrapper>
  );
};

export default App;
