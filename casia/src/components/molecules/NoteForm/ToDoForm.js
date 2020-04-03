import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AddToDoList } from '../../../actions';

import ChooseEmoji from '../ChooseEmoji/ChooseEmoji';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import addIcon from '../../../assets/svgs/pluswhbl.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(200, 220, 237);
  width: 40%;
  border-radius: 5px;
  position: fixed;
  bottom: 10px;
  left: 30%;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #eee;
  font-size: 20px;
  padding: 0px;
  margin: 0 10px;
  width: 100%;
  background-color: rgb(200, 220, 237);
  &:focus {
    border-bottom-color: royalblue;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  justify-self: flex-end;
  width: 30px;
  height: 30px;
  background-size: 25px;
`;

const ToDoForm = props => {
  const [image, setImage] = useState(null);

  const addingListHandler = props => {
    const taskValue = document.getElementById('toDoAddListInput').value;
    document.getElementById('toDoAddListInput').value = '';
    setImage(null);
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
      <StyledButtonIcon
        icon={addIcon}
        onClick={() => props.dispatch(AddToDoList(addingListHandler()))}
      ></StyledButtonIcon>
    </Wrapper>
  );
};

export default connect(null, null)(ToDoForm);
