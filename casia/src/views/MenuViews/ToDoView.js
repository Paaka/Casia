import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import ToDoListItem from '../../components/molecules/ToDoListItem/ToDoListItem';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 80vh;
  background-color: rgb(223, 237, 249);
  padding: 20px 20px;
`;

const ImageView = props => {
  return (
    <MainTemplate>
      <Wrapper>
        {props.task.length === 0 ? (
          <h1>You don't have any to do lists</h1>
        ) : (
          props.task.map(toDoList => (
            <ToDoListItem
              key={toDoList.id}
              id={toDoList.id}
              icon={toDoList.listIcon}
            >
              {toDoList.listContent}
            </ToDoListItem>
          ))
        )}
      </Wrapper>
    </MainTemplate>
  );
};

const mapStateToProps = ({ task }) => ({ task });

export default connect(mapStateToProps, null)(ImageView);
