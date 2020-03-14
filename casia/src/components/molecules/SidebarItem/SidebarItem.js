import React from 'react';
import styled from 'styled-components';
import ButtonItem from '../../atoms/ButtonIcon/ButtonIcon';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  text-align: center;
  padding: 5px;
  border-radius: 50px;
  background-color: royalblue;
  text-decoration: none;
  color: white;
  position: absolute;
  right: 15px;
  bottom: 10px;
`;

const SidebarItem = props => (
  <Wrapper>
    <ButtonItem icon={props.icon} />
    {props.numOfItems > 0 ? <Counter>{props.numOfItems}</Counter> : null}
  </Wrapper>
);

export default SidebarItem;
