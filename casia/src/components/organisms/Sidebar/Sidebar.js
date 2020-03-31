import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from '../../../routes/routes';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import SidebarItem from '../../molecules/SidebarItem/SidebarItem';
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

const Sidebar = props => (
  <Wrapper>
    <ButtonIcon onClick={props.menuHandler} icon={MenuIcon}></ButtonIcon>

    <NavLink to={Routes.homePage} style={{ textDecoration: 'none' }}>
      <Logo></Logo>
    </NavLink>
    <LinkWrapper>
      <NavLink to={Routes.notesPage}>
        <SidebarItem
          numOfItems={props.notes.length}
          icon={NotesLinkIcon}
        ></SidebarItem>
      </NavLink>
      <NavLink to={Routes.toDoPage}>
        <SidebarItem
          numOfItems={props.task.length}
          icon={ToDoLinkIcon}
        ></SidebarItem>
      </NavLink>
      <NavLink to={Routes.imagePage}>
        <ButtonIcon icon={ImagesLinkIcon}></ButtonIcon>
      </NavLink>
    </LinkWrapper>
  </Wrapper>
);

const mapStateToProps = ({ notes, task }) => ({ notes, task });

export default connect(mapStateToProps, null)(Sidebar);
