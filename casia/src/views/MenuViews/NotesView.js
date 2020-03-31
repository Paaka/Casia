import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNoteAction } from '../../actions';
import styled from 'styled-components';
import Routes from '../../routes/routes';

import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import addSVG from '../../assets/svgs/plus.svg';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import Note from '../../components/molecules/Note/note';
import Fade from '../../components/animations/FadeIn';
import CreationNote from '../../components/molecules/NoteForm/CreationNote';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 95%;
  min-height: 60vh;
  position: relative;
`;

const NotesView = props => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const updatePinHandler = note => {
    props.dispatch(updateNoteAction(note));
  };

  const noteCb = val => (
    <Note
      updatePinHandler={updatePinHandler}
      all={val}
      key={val.id}
      id={val.id}
      title={val.title}
      context={val.context}
      color={val.color}
      standard
    />
  );

  return (
    <MainTemplate>
      {props.notes.length === 0 ? (
        <Fade>
          <h1>
            You don't have any notes{' '}
            <span role="img" aria-label="brokenHeart">
              💔
            </span>
          </h1>
        </Fade>
      ) : (
        <StyledGridWrapper>
          {props.notes
            .filter(note => note.isPinned === true)
            .map((val, i) => {
              return noteCb(val, props);
            })}
          {props.notes
            .filter(note => note.isPinned === false)
            .map((val, i) => {
              return noteCb(val);
            })}
        </StyledGridWrapper>
      )}
      <CreationNote isOpen={isFormOpen} />

      <ButtonIcon
        icon={addSVG}
        onClick={() => setIsFormOpen(!isFormOpen)}
      ></ButtonIcon>
    </MainTemplate>
  );
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps, null)(NotesView);
