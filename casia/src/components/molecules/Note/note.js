import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteNote, noteContentHandler } from '../../../actions/index';
import Colors from '../../../constants/index';

import unpinnedIcon from '../../../assets/svgs/pin.svg';
import pinnedIcon from '../../../assets/svgs/security-pin.svg';
import BtnIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 20% 60% 20%;
  border-radius: 20px;
  border: 2px solid #ccc;
  margin: 5px;
  overflow: hidden;
  background-color: ${({ bgColor }) =>
    bgColor ? Colors.noteColors[bgColor] : 'white'};
  transition: 0.3s all;
`;
const StyledButtonIcon = styled(BtnIcon)`
  height: 30px;
  width: 30px;
  background-size: 25px;
  padding: 5px;
  cursor: pointer;
  grid-column: 2;
  grid-row: 1;
  z-index: 1000;
  justify-self: flex-end;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const Header = styled.input`
  border: none;
  height: 40px;
  justify-self: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
  background-color: ${({ bgColor }) =>
    bgColor ? Colors.noteColors[bgColor] : 'white'};
  padding: 10px 2px;
  grid-column: 1;
  grid-row: 1;
  margin-left: 170px;
`;
const CardContent = styled.textarea`
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 100%;
  border: none;
  grid-column: 1 / span 2;
  background-color: ${({ bgColor }) =>
    bgColor ? Colors.noteColors[bgColor] : 'white'};
`;
const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Note = props => {
  return (
    <Wrapper
      id={props.id}
      bgColor={props.color}
      onClick={() => {
        document.getElementById(props.id).style.width = '800px';
      }}
    >
      <StyledButtonIcon
        onClick={() => props.updatePinHandler(props.all)}
        icon={props.all.isPinned ? pinnedIcon : unpinnedIcon}
      />
      <Header
        bgColor={props.color}
        value={props.title}
        onChange={e =>
          props.dispatch(noteContentHandler(e.target.value, props.id, 'TITLE'))
        }
      ></Header>
      <CardContent
        bgColor={props.color}
        onChange={e =>
          props.dispatch(noteContentHandler(e.target.value, props.id))
        }
        value={props.context}
      />
      <ButtonWrapper>
        <Button secondary onClick={e => props.dispatch(deleteNote(props.id))}>
          DELETE
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default connect(null, null)(Note);
