import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSelectedItem } from '../../../actions/index';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import HeadingBig from '../../atoms/BigHeading/BigHeading';

import NoteIcon from '../../../assets/svgs/note.svg';
import ListIcon from '../../../assets/svgs/list.svg';
import BrushIcon from '../../../assets/svgs/graphic-design.svg';

const Wrapper = styled.div`
  display: flex;
  width: 30rem;
  justify-content: space-around;
  margin: 10px;
  padding: 5px;
  border: 2px solid #eee;
  border-radius: 3px;
`;

const CreatingMenu = props => (
  <Wrapper>
    <HeadingBig>Create : </HeadingBig>

    <Link
      to="/CreateItem"
      onClick={() => props.dispatch(changeSelectedItem('Note'))}
    >
      <ButtonIcon icon={NoteIcon} />
    </Link>
    <Link to="/CreateItem">
      <ButtonIcon
        icon={ListIcon}
        onClick={() => props.dispatch(changeSelectedItem('ToDoList'))}
      />
    </Link>
    <Link to="/CreateItem">
      <ButtonIcon
        icon={BrushIcon}
        onClick={() => props.dispatch(changeSelectedItem('Image'))}
      />
    </Link>
  </Wrapper>
);

export default connect(null, null)(CreatingMenu);
