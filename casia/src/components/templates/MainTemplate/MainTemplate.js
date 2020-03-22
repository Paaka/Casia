import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import VerticalSidebar from '../../organisms/Sidebar/VerticalSidebar/VerticalSidebar';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

const GridWrapper = styled.div`
  position: relative;
`;

const MainTemplate = props => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarToggleHandler = props => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    }
  };
  const closeSidebar = props => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <GridWrapper>
      <VerticalSidebar isVisible={isSidebarOpen} />
      <InnerWrapper onClick={closeSidebar}>
        <Sidebar menuHandler={sidebarToggleHandler}></Sidebar>
        {props.children}
      </InnerWrapper>
    </GridWrapper>
  );
};
export default MainTemplate;
