import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import fetchTopicArticles from '../actions/topicArticles';
import * as actions from '../actions/topicArticles';
import ArticleCard from './ArticleCard';

import '../css/ArticleList.css';

export class TopicPage extends React.Component {
// call the action on component did mount
  componentDidMount () {
    let topicSlug = this.props.match.params.topic_slug;
    this.props.fetchTopicArticles (topicSlug);
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.topic_slug !== nextProps.match.params.topic_slug) {
      this.props.fetchTopicArticles(nextProps.match.params.topic_slug);
    }
  }

  render () {
    return (
      <div className='ArticleList'>{
        this.props.topicArticles.sort(function (a,b) { return b.votes - a.votes;}).
          map(article => 
            <ArticleCard articleVote={this.props.articleVote}
              title={article.title} 
              votes={article.votes} 
              id={article._id} 
              key={article._id} 
              user={article.created_by}/>)}
      </div>
    );
  }
}
// this is throwing up the action to redux for completion

function mapDispatchToProps (dispatch) {
  return {
    fetchTopicArticles: (id) => {
      dispatch(fetchTopicArticles(id));
    }, 
    articleVote:(id, vote) => {
      dispatch(actions.articleVote(id, vote));
    }
  };
}

function mapStateToProps (state) {
  return {
    topicArticles: state.topicArticles.data
  };
}

TopicPage.propTypes = {
  topicArticles: PropTypes.array.isRequired,
  fetchTopicArticles: PropTypes.func.isRequired,
  articleVote: PropTypes.func.isRequired, 
  match: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired, 
  topic_slug: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);