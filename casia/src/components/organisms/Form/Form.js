import React from 'react';
import NoteForm from '../../molecules/NoteForm/NoteForm';
import TodoForm from '../../molecules/NoteForm/ToDoForm';
import GoBack from '../../molecules/GoBack/GoBack';

const Form = props => {
  console.log(props);
  if (props.data === 'Note') {
    return <NoteForm />;
  } else if (props.data === 'ToDoList') {
    return <TodoForm></TodoForm>;
  } else {
    return null;
  }
};

export default Form;
