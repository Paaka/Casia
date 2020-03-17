import React from 'react';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import CreatingMenu from '../../components/molecules/CreatingMenu/CreatingMenu';
import ColorPallete from '../../components/molecules/ColorPallete/ColorPallete';

const RootView = () => (
  <>
    <MainTemplate>
      <CreatingMenu></CreatingMenu>
      <ColorPallete></ColorPallete>
    </MainTemplate>
  </>
);

export default RootView;
