import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Note from '../../components/molecules/Note/note';

import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 95%;
  min-height: 60vh;
`;

const ArchivesView = props => {
  const noteCb = val => (
    <Note
      updatePinHandler={() => {}}
      all={val}
      key={val.id}
      id={val.id}
      title={val.title}
      context={val.context}
      color={val.color}
      archived
    />
  );
  return (
    <MainTemplate>
      {props.archivedNotes.length <= 0 ? (
        <h1>
          You don't have any archived notes.
          <span role="img" aria-label="sadFace">
            😕
          </span>
        </h1>
      ) : (
        <>
          <h1>Yours archived notes✨:</h1>
          <StyledGridWrapper>
            {props.archivedNotes.map(note => {
              return noteCb(note);
            })}
          </StyledGridWrapper>
        </>
      )}
    </MainTemplate>
  );
};

const mapStateToProps = ({ archivedNotes }) => ({ archivedNotes });

export default connect(mapStateToProps, null)(ArchivesView);
