import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import GoBackIcon from '../../../assets/svgs/go-back.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url(${props => props.img});
  background-size: 2rem;

  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
`;

const GoBack = ({ where = '/' }) => {
  return (
    <NavLink to={where} style={{ textDecoration: 'none', color: 'black' }}>
      <Wrapper>
        <Icon img={GoBackIcon}></Icon>
        <h3>Go Back</h3>
      </Wrapper>
    </NavLink>
  );
};

export default GoBack;
