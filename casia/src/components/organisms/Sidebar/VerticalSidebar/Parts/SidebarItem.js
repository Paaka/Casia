import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%-2px;
  height: 2.75rem;
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ isActive }) =>
    isActive ? 'rgb(254,239,195)' : 'white'};
  border-right: transparent 2px solid;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  transition: background-color 0.25s;
  outline: none;

  &:hover {
    background-color: #eee;
  }
`;

const StyledParagraph = styled.p`
  font-weight: 500;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
`;

const UserLogo = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 8px;
  border-radius: 50%;
  background-image: url(${props => props.itemImg});
  background-size: 2.2rem;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  margin: 0 1.5rem;
`;

const SidebarItem = props => {
  let isActive = false;
  if (useLocation().pathname === props.linkTo) {
    isActive = true;
  }
  return (
    <NavLink
      style={{ textDecoration: ' none', color: 'black' }}
      to={props.linkTo}
      activeClassName="active"
    >
      <Wrapper isActive={isActive}>
        <UserLogo itemImg={props.itemImg}></UserLogo>
        <StyledParagraph>{props.children}</StyledParagraph>
      </Wrapper>
    </NavLink>
  );
};

export default SidebarItem;
