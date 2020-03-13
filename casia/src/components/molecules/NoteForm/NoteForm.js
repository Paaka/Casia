import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../../actions/index';
import StyledInput from '../../atoms/Input/Input';
import Btn from '../../atoms/Button/Button';

const NoteForm = props => (
  <form>
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
    <Btn onClick={e => props.dispatch(addNote(e))}>Add Note</Btn>
  </form>
);

export default connect(null, null)(NoteForm);
