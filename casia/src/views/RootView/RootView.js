import React, { useState } from 'react';
import styled from 'styled-components';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import CreatingMenu from '../../components/molecules/CreatingMenu/CreatingMenu';

const Wrapper = styled.div`
  position: relative;
`;

const RootView = () => {
  return (
    <MainTemplate>
      <CreatingMenu></CreatingMenu>
    </MainTemplate>
  );
};

export default RootView;
