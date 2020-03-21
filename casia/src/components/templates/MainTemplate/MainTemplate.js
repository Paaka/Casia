import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import HorizontalSidebar from '../../organisms/Sidebar/VerticalSidebar';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

const GridWrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const MainTemplate = props => (
  <GridWrapper>
    <HorizontalSidebar></HorizontalSidebar>
    <InnerWrapper>
      <Sidebar></Sidebar>
      {props.children}
    </InnerWrapper>
  </GridWrapper>
);
export default MainTemplate;
