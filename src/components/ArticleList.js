import React from 'react';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';
import fetchArticles from '../actions/articles';
import * as actions from '../actions/articles';
import ArticleCard from './ArticleCard';

import '../css/ArticleList.css';

export class ArticleList extends React.Component {

  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    return (
      <div className='ArticleList'>
        {this.props.articles.sort(function (a,b) { return b.votes - a.votes;})
          .map(article => 
            <ArticleCard 
              articleVote={this.props.articleVote}
              title={article.title} 
              votes={article.votes} 
              id={article._id}
              key={article.title} 
              user={article.created_by}/>)}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles());
    }, 
    articleVote:(id, vote) => {
      dispatch(actions.articleVote(id, vote));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles
  };
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  articleVote: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);