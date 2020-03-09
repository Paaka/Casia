import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../organisms/Sidebar/Sidebar';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

const MainTemplate = props => (
  <InnerWrapper>
    <Sidebar></Sidebar>
    {props.children}
  </InnerWrapper>
);
export default MainTemplate;
