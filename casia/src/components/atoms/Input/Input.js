import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StlyedLabel = styled.label`
  color: #333;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 20px;
`;

const StyledTextarea = styled.textarea`
  background-color: 'red';
  padding: 10px 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid gray;
  padding: 3px;
  border-radius: 10px;
  margin-top: 2px;
`;

const InputLabel = props => (
  <Wrapper>
    <StlyedLabel htmlFor={props.id}>{props.label}</StlyedLabel>
    {props.textarea ? (
      <StyledTextarea id={props.id} placeholder={props.placeholder} rows="6" />
    ) : (
      <StyledInput id={props.id} placeholder={props.placeholder}></StyledInput>
    )}
  </Wrapper>
);

export default InputLabel;
