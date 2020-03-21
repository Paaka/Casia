import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: red;
  z-index: 9999;
`;

const HorizontalSidebar = props => (
  <Wrapper>
    <p>hello</p>
  </Wrapper>
);

export default HorizontalSidebar;
