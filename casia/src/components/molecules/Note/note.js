import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 20px;
  border: 2px solid #ccc;
  margin: 5px;
  overflow: hidden;
`;

const Header = styled.input`
  border: none;
  height: 40px;
  justify-self: center;
  font-size: 28px;
  font-weight: 700;
  text-transform: capitalize;
  background-color: #ffea00;
  padding: 20px 30px;
`;

const CardContent = styled.textarea`
  width: 100%;
  height: 60%;
  border: none;
`;

const Note = props => {
  return (
    <Wrapper>
      <Header value={props.title}></Header>
      <CardContent value={props.context} />
    </Wrapper>
  );
};

export default Note;
