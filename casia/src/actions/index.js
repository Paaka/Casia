export const changeSelectedItem = string => {
  return {
    type: 'CHANGE_SELECTED_ITEM',
    payload: {
      item: string
    }
  };
};

export const addNote = e => {
  e.preventDefault();
  const title = document.getElementById('noteTitle').value;
  const context = document.getElementById('noteContext').value;
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteContext').value = '';
  return {
    type: 'ADD_NOTE',
    payload: {
      title: title,
      context: context
    }
  };
};
