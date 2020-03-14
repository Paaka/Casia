import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, setPin } from '../../../actions/index';
import emptyPin from '../../../assets/svgs/pin.svg';
import fullPin from '../../../assets/svgs/security-pin.svg';
import ButtonIcon from '../../../components/atoms/ButtonIcon/ButtonIcon';
import StyledInput from '../../atoms/Input/Input';
import Btn from '../../atoms/Button/Button';

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
        <ButtonIcon
          onClick={() => {
            this.pinIconHandler();
          }}
          icon={this.state.isPinned ? fullPin : emptyPin}
        ></ButtonIcon>
        <StyledInput
          id="noteTitle"
          label="Note Title"
          placeholder="Enter title of note..."
        />
        <StyledInput
          textarea
          id="noteContext"
          label="Note Content"
          placeholder="Enter content of note..."
        ></StyledInput>
        <Btn
          onClick={e => this.props.dispatch(addNote(e, this.state.isPinned))}
        >
          Add Note
        </Btn>
      </form>
    );
  }
}

export default connect(null, null)(NoteForm);
