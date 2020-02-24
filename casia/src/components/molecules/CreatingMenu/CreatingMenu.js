import React from 'react';
import styled from 'styled-components';

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

const CreatingMenu = () => (
  <Wrapper>
    <HeadingBig>Create : </HeadingBig>
    <ButtonIcon icon={NoteIcon} />
    <ButtonIcon icon={ListIcon} />
    <ButtonIcon icon={BrushIcon} />
  </Wrapper>
);

export default CreatingMenu;
