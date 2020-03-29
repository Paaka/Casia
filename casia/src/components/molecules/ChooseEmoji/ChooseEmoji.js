import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

import addImage from '../../../assets/svgs/addImage.svg';
import DragonIcon from '../../../assets/listIcons/fantasy.svg';
import FireIcon from '../../../assets/listIcons/fire.svg';
import GroceryIcon from '../../../assets/listIcons/grocery.svg';
import HeartIcon from '../../../assets/listIcons/heart.svg';
import PicknicIcon from '../../../assets/listIcons/picnic.svg';
import SportIcon from '../../../assets/listIcons/sun.svg';
import TentIcon from '../../../assets/listIcons/tent.svg';
import WorldIcon from '../../../assets/listIcons/world.svg';

const Wrapper = styled.div`
  position: relative;
`;

const Modal = styled.div`
  position: absolute;
  left: 0;
  top: -140px;
  width: 200px;
  height: 150px;
  background-color: white;
  display: ${({ shouldBeOpen }) => (shouldBeOpen ? 'grid' : 'none')};
  transition: opacity 0.3s;
  grid-template-columns: repeat(4, 1fr);
  opacity: ${({ shouldBeOpen }) => (shouldBeOpen ? 1 : 0)};
  border: 2px solid #eee;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 25px;
  height: 25px;
  background-size: 20px;
`;

const ChooseEmoji = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultImage, setDefaultImage] = useState(addImage);
  const allIcons = [
    { id: 1, icon: DragonIcon },
    { id: 2, icon: FireIcon },
    { id: 3, icon: GroceryIcon },
    { id: 4, icon: HeartIcon },
    { id: 5, icon: PicknicIcon },
    { id: 6, icon: SportIcon },
    { id: 7, icon: TentIcon },
    { id: 8, icon: WorldIcon }
  ];

  const imageSetHandler = icon => {
    setDefaultImage(icon);
    setIsOpen(false);
    props.onSelect(icon);
  };

  return (
    <Wrapper>
      <ButtonIcon
        icon={defaultImage}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Modal shouldBeOpen={isOpen}>
        {allIcons.map(val => (
          <StyledButtonIcon
            key={val.id}
            icon={val.icon}
            onClick={() => imageSetHandler(val.icon)}
          />
        ))}
      </Modal>
    </Wrapper>
  );
};

export default ChooseEmoji;
