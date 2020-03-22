import React from 'react';
import styled from 'styled-components';

import SidebarItem from './Parts/SidebarItem';
import UserInfo from './Parts/UserInfo';
import UserImage from '../../../../assets/svgs/user.svg';
import ArchivesImage from '../../../../assets/svgs/folders.svg';
import NotesLinkIcon from '../../../../assets/svgs/paper.svg';
import ToDoLinkIcon from '../../../../assets/svgs/checklist.svg';
import ImagesLinkIcon from '../../../../assets/svgs/photo.svg';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  border-right: 2px solid #ccc;
  background-color: white;
  z-index: 9999;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transform: translate(${({ isVisible }) => (isVisible ? '0px' : '-100%')});
  transition: all 0.4s;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;

const VerticalSidebar = props => (
  <Wrapper isVisible={props.isVisible}>
    <UserInfo userImg={UserImage} />

    <SidebarItem linkTo="/notes" itemImg={NotesLinkIcon}>
      Notes
    </SidebarItem>
    <SidebarItem linkTo="/todo" itemImg={ToDoLinkIcon}>
      To Do Lists
    </SidebarItem>
    <SidebarItem linkTo="/images" itemImg={ImagesLinkIcon}>
      Images
    </SidebarItem>
    <HorizontalLine />
    <SidebarItem linkTo="/Archives" itemImg={ArchivesImage}>
      Archives
    </SidebarItem>
  </Wrapper>
);

export default VerticalSidebar;
