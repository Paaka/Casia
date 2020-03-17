import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, setPin } from '../../../actions/index';
import emptyPin from '../../../assets/svgs/pin.svg';
import fullPin from '../../../assets/svgs/security-pin.svg';
import ButtonIcon from '../../../components/atoms/ButtonIcon/ButtonIcon';
import StyledInput from '../../atoms/Input/Input';
import Btn from '../../atoms/Button/Button';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 50vw;
  grid-template-rows: 20%, 65%, 15%;
  grid-template-columns: 1fr 20%;
  border: 3px solid #333;
  border-radius: 10px;
  padding: 10px;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 3px 3px 5px 6px #ccc;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  display: flex;
  justify-self: flex-end;
  height: 30px;
  width: 30px;
  background-size: 25px;
  padding: 5px;
  grid-column: 2;
  cursor: pointer;
`;

const TitleInput = styled.input`
  padding: 10px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  grid-column: 1 / span 2;
  border: none;
  min-height: 15vh;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const StyledBtn = styled.button`
  grid-column: 2;
  border: none;
  font-size: 18px;
  padding: 10px 8px;
  margin: 5px;
  background-color: transparent;
  transition: 0.2s background-color;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

class NoteForm extends React.Component {
  state = {
    isPinned: false
  };

  pinIconHandler = () => {
    this.setState({ isPinned: !this.state.isPinned });
  };

  render() {
    return (
      <form>
        <Wrapper>
          <TitleInput id="noteTitle" placeholder="Note Title" />
          <StyledButtonIcon
            onClick={() => {
              this.pinIconHandler();
            }}
            icon={this.state.isPinned ? fullPin : emptyPin}
          />
          <StyledTextarea
            textarea
            id="noteContext"
            label="Note Content"
            placeholder="Enter content of note..."
          ></StyledTextarea>
          <StyledBtn
            onClick={e => this.props.dispatch(addNote(e, this.state.isPinned))}
          >
            Add Note
          </StyledBtn>
        </Wrapper>
      </form>
    );
  }
}

export default connect(null, null)(NoteForm);
