import React from 'react';
import styled from 'styled-components';
import CreatingMenu from '../../molecules/CreatingMenu/CreatingMenu';
import Sidebar from '../../organisms/Sidebar/Sidebar';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

const MainTemplate = () => (
  <InnerWrapper>
    <Sidebar></Sidebar>
    <CreatingMenu></CreatingMenu>
  </InnerWrapper>
);
export default MainTemplate;
