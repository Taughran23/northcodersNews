import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import commentDelete from '../actions/deleteComment';
import { USERNAME } from '../config';

import '../css/Comment.css';


export class Comment extends React.Component {
  render () {
    return (
      <section>
        <div className='comment'>
          <div className='vote'>
            <i className='fa fa-chevron-up vote-chevron'onClick={this.props.commentVote.bind(null, this.props.id, 'up', this.props.comments.data)}/>
            <div className='vote-tally'>votes {this.props.votes}</div>
            <i className='fa fa-chevron-down vote-chevron'onClick={this.props.commentVote.bind(null, this.props.id, 'down',this.props.comments.data)}/>
          </div>
          <NavLink className='author' to={`/users/${this.props.author}`}> {this.props.author}</NavLink>
          <div className='comment-body'>{this.props.body}</div>
          {(function (props) {
            if (USERNAME === props.author) {
              return <button id='delete-button'className='button is-small'onClick={props.commentDelete.bind(null, props.id)}>
                          Delete Comment
              </button>;
            }
          })(this.props)}
        </div>
      </section>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    commentDelete: (id) => {
      dispatch(commentDelete(id));
    }
  };
}

function mapStateToProps (state) {
  return {
    comments: state.comments, 
    article: state.article
  };
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  commentVote: PropTypes.func.isRequired, 
  votes: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired, 
  author: PropTypes.string.isRequired, 
  comments: PropTypes.object.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
