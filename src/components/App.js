import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../css/bulma.css';


import ArticleList from './ArticleList';
import TopicsHeader from './TopicsHeader';
import TopicPage from './TopicPage';
import Article from './Article';

const history = createBrowserHistory();

class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <TopicsHeader/>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/:topic_slug' component={TopicPage} />
          <Route exact path='/articles/:article_id' component={Article} />
        </div>
      </Router>
    );
  }
}

export default App;