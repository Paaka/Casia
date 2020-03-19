const initalState = {
  counter: 1,
  creationItem: 'Note',
  list: [{ id: 0, name: 'Matt' }],
  notes: [
    {
      id: '0',
      isPinned: false,
      title: 'first note',
      context: 'Hello world',
      color: 'lightBlue'
    }
  ]
};

const rootReducer = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CHANGE_SELECTED_ITEM': {
      return {
        ...state,
        creationItem: (state.creationItem = action.payload.item)
      };
    }
    case 'ADD_NOTE': {
      const noteId = `${state.list.length}-${Math.floor(Math.random() * 1000)}`;
      const obj = { id: noteId, ...action.payload };

      return {
        ...state,
        notes: [...state.notes, obj]
      };
    }
    case 'DELETE_NOTE': {
      return {
        ...state,
        notes: state.notes.filter(val => val.id !== action.payload.itemId)
      };
    }
    case 'UPDATE_CONTENT_OF_NOTE': {
      return {
        ...state,
        notes: state.notes.map(item => {
          if (item.id === action.payload.itemId) {
            return {
              ...item,
              context: action.payload.newValue
            };
          } else {
            return item;
          }
        })
      };
    }
    case 'UPDATE_TITLE_OF_NOTE': {
      return {
        ...state,
        notes: state.notes.map(item => {
          if (item.id === action.payload.itemId) {
            return {
              ...item,
              title: action.payload.newValue
            };
          } else {
            return item;
          }
        })
      };
    }
    case 'UPDATE_PIN': {
      return {
        ...state,
        notes: state.notes.map(val => {
          if (val.id === action.payload.id) {
            return {
              ...action.payload
            };
          } else {
            return val;
          }
        })
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
