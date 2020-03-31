import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 40vw;
  background-color: red;
  position: fixed;
  right: 0px;
  transform: translate(${({ isOpen }) => (isOpen ? '0px' : '100%')});
  transition: 0.4s all;
`;

const CreationNote = props => {
  return (
    <Wrapper isOpen={props.isOpen}>
      <h1> hello</h1>
    </Wrapper>
  );
};

export default CreationNote;
