import React, { useState } from 'react';
import './App.css';
import CitationList from './CitationList';
import Container from './Container';
import Choose from './Choose';
import CitationForm from './CitationForm';
import Modal from './Modal';
import styled from 'styled-components';

const StyledWrapper=styled.section`
    display: flex;
`

const App = () => {
    //ran citation? this controls the modal
    const [modal, showModal] = useState(false)
    //set up the hooks for each value
    const [style, setStyle] = useState('MLA');
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [city, setCity] = useState('')
    const [publisher, setPublisher] = useState('')

    //this will be an array of objects of the previous citations being run
    const [citationsPrevious, setCitationsPrevious] = useState([]);

    //the current citation - most recent one. Each object will be added to the citation component to be rendered in either MLA or APA format.
    const [citationRecent, setRecentCitation] = 
      useState({
        first: "",
        last: "",
        title: "",
        year: "",
        city: "",
        publisher: ""
      });

    //Choose a citation style
    //This will toggle the style of citation that will be shown in modal, text for the type of citation, but will also toggle back and forth previous citations
    const chooseStyle = (event) => {
      setStyle(event.target.value);
    }

    //reset to initial state after the form has been submitted.
    const resetState = () => {
      showModal(false)
      showModal('')
      setFirst('')
      setLast('')
      setTitle('')
      setYear('')
      setCity('')
      setPublisher('')
    }
    //The main function that runs the citation and sets the citation object
    const handleSubmit = (event) => {
      event.preventDefault();
      //first we need to set the citation ran to true!
      showModal(true)
      //next we need to set the whole state of the object 
      setRecentCitation({
        style: style,
        first: first,
        last: last,
        title: title,
        year: year,
        city: city,
        publisher: publisher
      })
    }
    //rather than rewriting the same setstate, I wanted to do it with a switch
    const setFirstName = (event) => {
      setFirst(event.currentTarget.value)
    }


    const setLastName = (event) => {
      setLast(event.currentTarget.value);
    }

    const setBookTitle = (event) => {
      setTitle(event.currentTarget.value);
    }

    const setBookYear = (event) => {
      setYear(event.currentTarget.value);
    }

    const setPublisherName = (event) => {
      setPublisher(event.currentTarget.value);
    }

    const setPublishCity = (event) => {
      setCity(event.currentTarget.value);
    }

    //when we close the modal we want to show
    const modalClosed = () => {
      showModal(false);
      //we push the object from the current citation to the array when we close the modal.
      setCitationsPrevious(
        [...citationsPrevious, citationRecent]
      )
      //we reset the state once the modal closes
      resetState();
    }

    return (
      <>
        <StyledWrapper>
          <Container selected={ style }>
            <Choose chooseStyle={ chooseStyle } style={ style } />
            <CitationForm 
              setFirstName={ setFirstName } 
              firstVal={ first }
              setLastName={ setLastName }
              lastVal={ last }
              setBookTitle={ setBookTitle }
              titleVal={ title }
              setBookYear={ setBookYear }
              yearVal={ year }
              setPublishCity={ setPublishCity }
              cityVal={ city }
              setPublisher={ setPublisherName }
              pubVal={ publisher }
              style={ style } 
              handleSubmit={ handleSubmit }
            />
          </Container>
          {citationsPrevious.length > 0 && 
            <CitationList style={ style } 
            citationsPrevious={ citationsPrevious } />
          }
          {
            modal ? <Modal 
            modalClosed={ modalClosed } 
            style={ style } 
            citation={ citationRecent }
            />
            : false
          }
        </StyledWrapper>
      </>
    );
}

export default App;
