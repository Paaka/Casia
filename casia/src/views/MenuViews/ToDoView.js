import React from 'react';

import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';

class ImageView extends React.Component {
  render() {
    return (
      <MainTemplate>
        <h1> Hello There Todo</h1>
        <h2>{this.state.maybe}</h2>
      </MainTemplate>
    );
  }
}

export default ImageView;
