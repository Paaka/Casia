import React from 'react';
import styled from 'styled-components';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Logo from '../../molecules/Logo/Logo';

import MenuIcon from '../../../assets/svgs/open-menu.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1;
  height: 80px;
  grid-template-columns: 100px 200px;
`;

const Sidebar = () => (
  <Wrapper>
    <ButtonIcon icon={MenuIcon}></ButtonIcon>
    <Logo></Logo>
  </Wrapper>
);

export default Sidebar;
