import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../css/bulma.css';

import ArticleList from './ArticleList';

const history = createBrowserHistory();

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' component={ArticleList} />
        </div>
      </Router>
    );
  }
}

export default App;