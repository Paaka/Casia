import React from 'react';
import NoteForm from '../../molecules/NoteForm/NoteForm';

const Form = props => {
  if (props.data === 'Note') {
    return <NoteForm />;
  } else {
    return null;
  }
};

export default Form;