import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchArticles from '../actions/articles';
import userProfile from '../actions/userProfile';
import articleVote from '../actions/articleVote';
import ArticleCard from './ArticleCard';

import '../css/ArticleList.css';
import '../css/UserProfile.css';

export class UserProfile extends React.Component {
    
  componentDidMount () {
    const userName = this.props.match.params.username;
    this.props.userProfile(userName);
    this.props.fetchArticles();
  }
  render () {
    const userArticles = this.props.articles
      .filter((article) => {
        if (article.created_by === this.props.user.username) {
          return article;
        }
      });
    return (
      <div>
        <section>
          <div className="user-card is-8">
            <div>
              <div>
                <h1 className="title userName"><b>{this.props.user.username}</b></h1>
                <h6 className="subtitle name">{this.props.user.name}</h6>
              </div>
              <div className='avatar-container'>
                <img src={this.props.user.avatar_url}/>
              </div>
            </div>
          </div>
          <div className='ArticleList'>
            {userArticles
              .map(article => 
                <ArticleCard 
                  articleVote={this.props.articleVote}
                  title={article.title} 
                  votes={article.votes} 
                  id={article._id}
                  key={article.title} 
                  user={article.created_by}/>)}
          </div>
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userProfile: (userName) => {
      dispatch(userProfile(userName));
    }, 
    fetchArticles: () => {
      dispatch(fetchArticles());
    },
    articleVote:(id, vote) => {
      dispatch(articleVote(id, vote));
    }
  };
}

function mapStateToProps (state) {
  return {
    user: state.userProfile, 
    articles: state.articles
  };
}

UserProfile.propTypes = {
  userProfile: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  articleVote: PropTypes.func.isRequired, 
  articles: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);