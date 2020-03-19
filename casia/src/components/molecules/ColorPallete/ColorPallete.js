import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import colorIcon from '../../../assets/svgs/color-scheme.svg';
import Colors from '../../../constants/index';

const DropdownContent = styled.div`
  position: absolute;
  display: none;
  left: 0;
  top: -90px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  border: 1px solid #eee;
  padding: 10px;
  background-color: white;
`;

const Dropdown = styled.div`
  position: relative;
  &:hover ${DropdownContent} {
    display: grid;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 30px;
  height: 30px;
  background-size: 25px;
`;

const DropdownContentItem = styled.div`
  box-sizing: border-box;
  background-color: ${props => (props.bgColor ? props.bgColor : 'white')};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => (props.bgColor === 'white' ? '1px solid black' : 'none')};
  cursor: pointer;
`;

const ColorPallete = props => {
  const [mydata, setData] = useState({
    colors: [
      { id: 'white', color: 'white', isChecked: true },
      { id: 'red', color: Colors.noteColors.red, isChecked: false },
      { id: 'orange', color: Colors.noteColors.orange, isChecked: false },
      { id: 'yellow', color: Colors.noteColors.yellow, isChecked: false },
      { id: 'green', color: Colors.noteColors.green, isChecked: false },
      { id: 'blue', color: Colors.noteColors.blue, isChecked: false },
      {
        id: 'lightBlue',
        color: Colors.noteColors.lightBlue,
        isChecked: false
      },
      {
        id: 'darkBlue',
        color: Colors.noteColors.darkBlue,
        isChecked: false
      },
      { id: 'purple', color: Colors.noteColors.purple, isChecked: false },
      { id: 'pink', color: Colors.noteColors.pink, isChecked: false },
      { id: 'brown', color: Colors.noteColors.brown, isChecked: false },
      { id: 'silver', color: Colors.noteColors.silver, isChecked: false }
    ]
  });

  const colorChangeHandler = e => {
    setData({
      colors: mydata.colors.map(obj => {
        if (e.target.id === obj.id) {
          return {
            ...obj,
            isChecked: true
          };
        } else {
          return {
            ...obj,
            isChecked: false
          };
        }
      })
    });
    props.idk(e.target.id);
  };

  return (
    <Dropdown>
      <StyledButtonIcon icon={colorIcon} />
      <DropdownContent>
        {mydata.colors.map((val, i) => (
          <DropdownContentItem
            id={val.id}
            key={val.id}
            onClick={e => colorChangeHandler(e)}
            bgColor={val.color}
          >
            {val.isChecked ? '✔' : null}
          </DropdownContentItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

/* {data.colors.map((val, i) => (
  <DropdownContentItem onClick={() => {}} bgColor={val.color}>
    {val.isChecked ? '✔' : null}
  </DropdownContentItem>
))} */

export default ColorPallete;
