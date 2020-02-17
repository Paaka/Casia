import styled from 'styled-components';

const ButtonIcon = styled.div`
  height: 60px;
  width: 60px;
  padding: 10px;
  background-image: url(${props => props.icon});
  background-size: 45px;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  &:hover {
    background-color: #eee;
    border-radius: 50%;
  }
`;

export default ButtonIcon;
