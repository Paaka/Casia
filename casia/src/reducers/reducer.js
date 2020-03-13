const initalState = {
  counter: 1,
  creationItem: 'Note',
  list: [{ id: 0, name: 'Matt' }]
};

const rootReducer = (state = initalState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'CHANGE_SELECTED_ITEM': {
      return {
        ...state,
        creationItem: (state.creationItem = action.payload.item)
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
