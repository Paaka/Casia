export const changeSelectedItem = string => {
  return {
    type: 'CHANGE_SELECTED_ITEM',
    payload: {
      item: string
    }
  };
};

export const addNote = (e, state) => {
  e.preventDefault();
  console.log(state);
  const title = document.getElementById('noteTitle').value;
  const context = document.getElementById('noteContext').value;
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteContext').value = '';
  return {
    type: 'ADD_NOTE',
    payload: {
      title: title,
      context: context,
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
