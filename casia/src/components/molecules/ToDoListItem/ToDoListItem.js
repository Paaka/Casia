import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BgIcon from '../../atoms/BgIcon/BgIcon';
import defaultIcon from '../../../assets/svgs/defaultToDoImage.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  background-color: white;
  margin: 3px 0px;
  transition: 0.2s background-color;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledH3 = styled.h3`
  font-size: 18px;
  padding: 12px 0;
  margin: 0;
  color: rgb(49, 99, 171);
  font-weight: 500;
  margin-left: 15px;
`;

const ToDoListItem = props => {
  console.log(props);
  return (
    <Wrapper>
      <BgIcon mLeft="25px" image={props.icon ? props.icon : defaultIcon} />
      <StyledH3>{props.children}</StyledH3>
    </Wrapper>
  );
};

ToDoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.oneOf([PropTypes.string, null])
};

export default ToDoListItem;
