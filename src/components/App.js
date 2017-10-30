import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../css/bulma.css';


import ArticleList from './ArticleList';
import TopicsHeader from './TopicsHeader';
import TopicPage from './TopicPage';

const history = createBrowserHistory();

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <TopicsHeader/>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/:topic_slug' component={TopicPage} />
        </div>
      </Router>
    );
  }
}

export default App;