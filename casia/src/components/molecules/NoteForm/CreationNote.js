import React from 'react';
import styled from 'styled-components';

import ColorPallete from '../ColorPallete/ColorPallete';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40vw;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-left: 2px solid #ccc;
  position: fixed;
  right: 0px;
  transform: translate(${({ isOpen }) => (isOpen ? '0px' : '100%')});
  transition: 0.4s all;
  padding-left: 20px;
  z-index: 9999;
`;

const StyledHeading = styled.h2`
  font-size: 32px;
  color: rgb(49, 99, 171);
  margin-bottom: 30px;
`;

const StyledButton = styled.button`
  padding: 10px 30px;
  border: none;
  font-size: 16px;
  border-radius: 30px;
  background-color: rgb(49, 99, 171);
  color: white;
  outline: none;
  transition: all 0.25s;
  :hover {
    background-color: #24569e;
  }
  :active {
    background-color: #184a92;
  }
`;

const StyledInput = styled.input`
  width: 50%;
  min-height: 30px;
  border-radius: 30px;
  outline: none;
  border: 2px solid #eee;
  background-color: #eee;
  padding: 10px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
`;

const StyledTextarea = styled.textarea`
  background-color: #eee;
  width: 50%;
  border: none;
  border-radius: 30px;
  outline: none;
  resize: none;
  padding: 30px;
`;

const CreationNote = props => {
  return (
    <Wrapper isOpen={props.isOpen}>
      <StyledHeading> Add Note :</StyledHeading>

      <StyledInput id="noteFormTitle" type="text" placeholder="NOTE TITLE" />

      <StyledTextarea
        rows="12"
        placeholder="Enter content of note here..."
      ></StyledTextarea>
      <div>
        <ColorPallete></ColorPallete>
      </div>
      <StyledButton>ADD NOTE</StyledButton>
    </Wrapper>
  );
};

export default CreationNote;
