import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './Header';
import ArticleList from './ArticleList';
import TopicsHeader from './TopicsHeader';
import TopicPage from './TopicPage';
import UserProfile from './UserProfile';
import Article from './Article';

import '../css/bulma.css';
import '../acc/App.css';

const history = createBrowserHistory();

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Header/>
          <TopicsHeader/>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/:topic_slug' component={TopicPage} />
          <Route exact path='/users/:username' component={UserProfile} />
          <Route exact path='/articles/:article_id' component={Article} />
        </div>
      </Router>
    );
  }
}

export default App;