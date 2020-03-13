import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import RootView from './views/RootView/RootView';
import NotesView from './views/MenuViews/NotesView';
import ToDoView from './views/MenuViews/ToDoView';
import ImagesView from './views/MenuViews/ImageView';
import CreateItemView from './views/CreateItemView';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <RootView></RootView>
          </Route>
          <Route path="/notes">
            <NotesView></NotesView>
          </Route>
          <Route path="/Todo">
            <ToDoView></ToDoView>
          </Route>
          <Route path="/Images">
            <ImagesView></ImagesView>
          </Route>
          <Route path="/CreateItem">
            <CreateItemView clickedItem="Note"></CreateItemView>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
