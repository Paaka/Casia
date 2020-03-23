import React from 'react';
import { deleteNote, archiveNote, noteContentHandler } from '../../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Fade from '../../animations/FadeIn';
import ColorPallete from '../ColorPallete/ColorPallete';
import TrashIcon from '../../../assets/svgs/trash.svg';
import BtnIcon from '../../atoms/ButtonIcon/ButtonIcon';
import ArchiveIcon from '../../../assets/svgs/save.svg';

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

const BottomItems = props => (
  <Fade>
    <Wrapper>
      <StyledButtonIcon
        icon={TrashIcon}
        onClick={e => props.dispatch(deleteNote(props.id))}
      />
      <ColorPallete
        idk={str => props.dispatch(noteContentHandler(str, props.id, 'COLOR'))}
      ></ColorPallete>
      <StyledButtonIcon
        icon={ArchiveIcon}
        onClick={e => props.dispatch(archiveNote(props.id))}
      ></StyledButtonIcon>
    </Wrapper>
  </Fade>
);

export default connect(null, null)(BottomItems);
