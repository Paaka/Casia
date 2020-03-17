import React from 'react';
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
`;

class ColorPallete extends React.Component {
  state = {
    colors: [
      { color: 'white', isChecked: true },
      { color: Colors.noteColors.red, isChecked: false },
      { color: Colors.noteColors.orange, isChecked: false },
      { color: Colors.noteColors.yellow, isChecked: false },
      { color: Colors.noteColors.green, isChecked: false },
      { color: Colors.noteColors.blue, isChecked: false },
      { color: Colors.noteColors.lightBlue, isChecked: false },
      { color: Colors.noteColors.darkBlue, isChecked: false },
      { color: Colors.noteColors.purple, isChecked: false },
      { color: Colors.noteColors.pink, isChecked: false },
      { color: Colors.noteColors.brown, isChecked: false },
      { color: Colors.noteColors.silver, isChecked: false }
    ]
  };
  render() {
    return (
      <Dropdown>
        <StyledButtonIcon icon={colorIcon} />
        <DropdownContent>
          {this.state.colors.map((val, i) => (
            <DropdownContentItem onClick={() => {}} bgColor={val.color}>
              {val.isChecked ? '✔' : null}
            </DropdownContentItem>
          ))}
        </DropdownContent>
      </Dropdown>
    );
  }
}

export default ColorPallete;
