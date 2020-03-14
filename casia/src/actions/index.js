export const changeSelectedItem = string => {
  return {
    type: 'CHANGE_SELECTED_ITEM',
    payload: {
      item: string
    }
  };
};

export const addNote = (e, isPinned) => {
  e.preventDefault();
  console.log(isPinned);
  const title = document.getElementById('noteTitle').value;
  const context = document.getElementById('noteContext').value;
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteContext').value = '';
  return {
    type: 'ADD_NOTE',
    payload: {
      title: title,
      context: context,
      isPinned: isPinned
    }
  };
};

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    payload: {
      itemId: id
    }
  };
};

export const noteContentHandler = (value, id, str) => {
  if (str === 'TITLE') {
    return {
      type: 'UPDATE_TITLE_OF_NOTE',
      payload: { itemId: id, newValue: value }
    };
  } else {
    return {
      type: 'UPDATE_CONTENT_OF_NOTE',
      payload: { itemId: id, newValue: value }
    };
  }
};
