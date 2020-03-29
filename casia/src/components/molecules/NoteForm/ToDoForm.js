import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AddTask } from '../../../actions';

import ChooseEmoji from '../ChooseEmoji/ChooseEmoji';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #eee;
  font-size: 20px;
  padding: 0px;
  margin: 0 10px;
  &:focus {
    border-bottom-color: royalblue;
    background-color: white;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  transition: 0.2s background-color;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ToDoForm = props => {
  const [image, setImage] = useState(null);

  const addingListHandler = props => {
    const taskValue = document.getElementById('toDoAddListInput').value;
    return {
      value: taskValue,
      image: image
    };
  };

  const ChooseEmojiHandler = icon => {
    setImage(icon);
  };

  return (
    <Wrapper>
      <ChooseEmoji onSelect={ChooseEmojiHandler} />
      <StyledInput id="toDoAddListInput" type="text" />
      <StyledButton
        onClick={() => props.dispatch(AddTask(addingListHandler()))}
      >
        Add List
      </StyledButton>
    </Wrapper>
  );
};

export default connect(null, null)(ToDoForm);
