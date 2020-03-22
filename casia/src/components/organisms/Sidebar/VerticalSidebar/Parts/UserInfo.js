import React from 'react';
import styled from 'styled-components';

const User = styled.div`
  background-color: #eee;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const UserLogo = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 50%;
  background-image: url(${props => props.userImg});
`;

const StyledPadding = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

const UserInfo = props => (
  <User>
    <UserLogo userImg={props.userImg} />
    <div>
      <StyledPadding>Mateusz Hartabus</StyledPadding>
      <StyledPadding>Hartabus@example.com</StyledPadding>
    </div>
  </User>
);

export default UserInfo;
