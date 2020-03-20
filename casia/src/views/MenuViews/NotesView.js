import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNoteAction } from '../../actions';
import styled from 'styled-components';
import Routes from '../../routes/routes';

import FadeIn from '../../components/animations/FadeIn';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import addSVG from '../../assets/svgs/plus.svg';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import Note from '../../components/molecules/Note/note';
import Fade from '../../components/animations/FadeIn';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 95%;
  min-height: 60vh;
`;

const NotesView = props => {
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
    />
  );

  return (
    <MainTemplate>
      {props.notes.length === 0 ? (
        <Fade>
          <h1>
            You don't have any notes <span role="img">💔</span>
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
      <Link to={Routes.newItemPage}>
        <ButtonIcon icon={addSVG}></ButtonIcon>
      </Link>
    </MainTemplate>
  );
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps, null)(NotesView);
