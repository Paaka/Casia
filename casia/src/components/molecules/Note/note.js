import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteNote, noteContentHandler } from '../../../actions/index';

import unpinnedIcon from '../../../assets/svgs/pin.svg';
import pinnedIcon from '../../../assets/svgs/security-pin.svg';
import BtnIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  border-radius: 20px;
  border: 2px solid #ccc;
  margin: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Header = styled.input`
  border: none;
  height: 40px;
  justify-self: center;
  font-size: 28px;
  font-weight: 700;
  text-transform: capitalize;
  background-color: #ffea00;
  padding: 20px 30px;
`;

const CardContent = styled.textarea`
  width: 100%;
  height: 60%;
  border: none;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Note = props => {
  return (
    <Wrapper>
      <BtnIcon
        onClick={() => {
          console.log('work');
        }}
        icon={props.all.isPinned ? pinnedIcon : unpinnedIcon}
      />
      <Header
        value={props.title}
        onChange={e =>
          props.dispatch(noteContentHandler(e.target.value, props.id, 'TITLE'))
        }
      ></Header>
      <CardContent
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
