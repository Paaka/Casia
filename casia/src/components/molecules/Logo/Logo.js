import React from 'react';
import styled from 'styled-components';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import LogoIcon from '../../../assets/svgs/siberian-husky.svg';

const StyledHeading = styled.h3`
  font-size: 2.2rem;
  color: #666;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => (
  <Wrapper>
    <ButtonIcon icon={LogoIcon} logo />
    <StyledHeading>HNote</StyledHeading>
  </Wrapper>
);

export default Logo;
