import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Routes from '../../routes/routes';

import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import addSVG from '../../assets/svgs/plus.svg';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import Note from '../../components/molecules/Note/note';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 95%;
  min-height: 60vh;
`;

const noteCb = val => (
  <Note
    all={val}
    key={val.id}
    id={val.id}
    title={val.title}
    context={val.context}
  />
);

const NotesView = props => {
  return (
    <MainTemplate>
      {props.notes.length === 0 ? (
        <h1>
          You don't have any notes <span>💔</span>
        </h1>
      ) : (
        <StyledGridWrapper>
          {props.notes
            .filter(note => note.isPinned === true)
            .map((val, i) => {
              return noteCb(val);
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

export default connect(mapStateToProps)(NotesView);
