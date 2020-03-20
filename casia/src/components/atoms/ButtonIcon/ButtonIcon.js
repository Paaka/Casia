import styled, { css } from 'styled-components';

const ButtonIcon = styled.div`
  height: 60px;
  width: 60px;
  padding: 10px;
  background-image: url(${props => props.icon});
  background-size: 45px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: 0.2s all;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  ${({ logo }) =>
    logo &&
    css`
      padding: 0;
      background-size: 55px;
      &:hover {
        background-color: transparent;
      }
    `}
`;

export default ButtonIcon;
