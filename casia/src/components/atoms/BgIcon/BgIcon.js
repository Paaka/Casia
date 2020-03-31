import React from 'react';
import styled from 'styled-components';

const BgIcon = styled.div`
  background-image: url(${({ image }) => image});
  background-size: ${({ imageSize }) => (imageSize ? imageSize : '25px')};
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  width: ${({ imageWidth }) => (imageWidth ? imageWidth : '30px')};
  height: ${({ imageHeight }) => (imageHeight ? imageHeight : '30px')};
  margin-right: ${({ mRight }) => mRight};
  margin-left: ${({ mLeft }) => mLeft};
`;

export default BgIcon;
