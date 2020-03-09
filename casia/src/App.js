import React from 'react';
import RootView from './views/RootView/RootView';
import NotesView from './views/MenuViews/NotesView';
import ToDoView from './views/MenuViews/ToDoView';
import ImagesView from './views/MenuViews/ImageView';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
