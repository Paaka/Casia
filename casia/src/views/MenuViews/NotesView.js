import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import Note from '../../components/molecules/Note/note';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 95%;
  min-height: 60vh;
`;

const NotesView = props => {
  return (
    <MainTemplate>
      {props.notes.length === 0 ? (
        <h1>
          You don't have any notes <span>💔</span>
        </h1>
      ) : (
        <StyledGridWrapper>
          {props.notes.map((val, i) => (
            <Note title={val.title} context={val.context} />
          ))}
        </StyledGridWrapper>
      )}
    </MainTemplate>
  );
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(NotesView);
