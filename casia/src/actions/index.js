export const changeSelectedItem = string => {
  return {
    type: 'CHANGE_SELECTED_ITEM',
    payload: {
      item: string
    }
  };
};

export const addNote = state => {
  return {
    type: 'ADD_NOTE',
    payload: {
      title: state.noteTitle,
      context: state.noteContent,
      isPinned: state.isPinned,
      color: state.color
    }
  };
};

export const deleteNote = (id, from) => {
  if (from === 'ARCHIVES') {
    return {
      type: 'DELETE_ARCHIVED_NOTE',
      payload: {
        itemId: id
      }
    };
  } else {
    return {
      type: 'DELETE_NOTE',
      payload: {
        itemId: id
      }
    };
  }
};

export const noteContentHandler = (value, id, str) => {
  if (str === 'TITLE') {
    return {
      type: 'UPDATE_TITLE_OF_NOTE',
      payload: { itemId: id, newValue: value }
    };
  } else if (str === 'COLOR') {
    return {
      type: 'UPDATE_COLOR_OF_NOTE',
      payload: { itemId: id, newValue: value }
    };
  } else {
    return {
      type: 'UPDATE_CONTENT_OF_NOTE',
      payload: { itemId: id, newValue: value }
    };
  }
};

export const updateNoteAction = note => {
  return {
    type: 'UPDATE_PIN',
    payload: {
      ...note,
      isPinned: !note.isPinned
    }
  };
};

export const archiveNote = ID => {
  return {
    type: 'ARCHIVE_NOTE',
    payload: {
      noteID: ID
    }
  };
};

export const unarchiveNote = ID => {
  return {
    type: 'UNARCHIVE_NOTE',
    payload: {
      noteID: ID
    }
  };
};

export const AddToDoList = task => {
  return {
    type: 'ADD_TO_DO_LIST',
    payload: {
      listContent: task.value,
      listIcon: task.image
    }
  };
};
