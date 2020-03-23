import React from 'react';
import { deleteNote, unarchiveNote } from '../../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Fade from '../../animations/FadeIn';

import RefreshIcon from '../../../assets/svgs/refresh.svg';
import TrashIcon from '../../../assets/svgs/trash.svg';
import BtnIcon from '../../atoms/ButtonIcon/ButtonIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtonIcon = styled(BtnIcon)`
  height: 30px;
  width: 30px;
  background-size: 25px;
  padding: 5px;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const BottomItemsArchivised = props => (
  <Fade>
    <Wrapper>
      <StyledButtonIcon
        icon={TrashIcon}
        onClick={e => props.dispatch(deleteNote(props.id, 'ARCHIVES'))}
      />
      <StyledButtonIcon
        icon={RefreshIcon}
        onClick={e => props.dispatch(unarchiveNote(props.id))}
      />
    </Wrapper>
  </Fade>
);

export default connect(null, null)(BottomItemsArchivised);
