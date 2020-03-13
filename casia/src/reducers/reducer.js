const initalState = {
  counter: 1,
  creationItem: 'Note',
  list: [{ id: 0, name: 'Matt' }],
  notes: [{ title: 'first note', context: 'Hello world' }]
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
    case 'ADD_NOTE': {
      console.log(action.payload.title);
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
