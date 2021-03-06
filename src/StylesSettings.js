import styled from 'styled-components';

export const stylesettings = {
  mla: {
    primary: '#555aee',
    secondary: '#ee5555',
    secondaryhover: '#0AC25A',
    secondaryboxshadow: '#15B358'
  },
  apa: {
    primary: '#9b59b6',
    secondary: 'white',
    secondaryhover: '#813A9D',
    secondaryboxshadow: '#6F1F8E'
  },
  extra: {
    modalbg: '#6c6abb'
  }
};

export const StyledSubmitButton = styled.button`
  border-radius: ${props => (props.onClick ? `0` : `5px`)};
  padding: ${props => (props.onClick ? `0.2rem` : `15px 25px`)};
  font-size: 22px;
  text-decoration: none;
  margin: 20px auto;
  ${props => props.onClick && `margin-bottom: 0;`}
  color: ${props =>
    props.selected === 'MLA'
      ? stylesettings.mla.primary
      : stylesettings.apa.primary};
  position: relative;
  border: 0;
  display: flex;
  background-color: white;
  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;
