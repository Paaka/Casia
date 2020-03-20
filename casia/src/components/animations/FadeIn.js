import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Fade = styled.div`
  display: block;
  height: 100%;
  margin-top: 20px;
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${fadeIn} 0.4s ease-in;
  transition: visibility 0.4s ease-in;
`;

export default Fade;
