import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: royalblue;
  color: white;
  width: 100%;
  margin-top: 5px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: grey;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
