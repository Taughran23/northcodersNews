import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../css/ArticleCard.css';

export const ArticleCard = function (props) {
  return (
    <div className='article-container'>
      <article className='media'>
        <div className='media-left'>
          <div className='votes'>
            <div className='vote-up'>
              <i className='fa fa-chevron-up'onClick={props.articleVote.bind(null, props.id, 'up')}/>
            </div>
            <div className='vote-tally'>votes  {props.votes}</div>
            <div className='vote-down'>
              <i className='fa fa-chevron-down 'onClick={props.articleVote.bind(null, props.id, 'down')}/>
            </div>
          </div>
        </div>

        <div>
          <div>
            <NavLink to={`/articles/${props.id}`} className='article-title is-3'>{props.title}</NavLink>
          </div>
          <div>
            <NavLink to={`/users/${props.user}`} className='user-name is-4'>
              submitted by {props.user}
            </NavLink>
          </div>
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  articleVote: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired, 
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default ArticleCard;