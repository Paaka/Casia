import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Logo from '../../molecules/Logo/Logo';

import NotesLinkIcon from '../../../assets/svgs/paper.svg';
import ToDoLinkIcon from '../../../assets/svgs/checklist.svg';
import ImagesLinkIcon from '../../../assets/svgs/photo.svg';
import MenuIcon from '../../../assets/svgs/open-menu.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1;
  height: 80px;
  grid-template-columns: 100px 1fr 20%;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 2px solid #eee;
  width: 100vw;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-self: center;
`;

const Sidebar = () => (
  <Wrapper>
    <ButtonIcon icon={MenuIcon}></ButtonIcon>

    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <Logo></Logo>
    </NavLink>
    <LinkWrapper>
      <NavLink to="/Notes">
        <ButtonIcon icon={NotesLinkIcon}></ButtonIcon>
      </NavLink>
      <NavLink to="/Todo">
        <ButtonIcon icon={ToDoLinkIcon}></ButtonIcon>
      </NavLink>
      <NavLink to="/Images">
        <ButtonIcon icon={ImagesLinkIcon}></ButtonIcon>
      </NavLink>
    </LinkWrapper>
  </Wrapper>
);

export default Sidebar;
