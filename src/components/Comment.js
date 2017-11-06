import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import commentDelete from '../actions/comment';
import { USERNAME } from '../config';

import '../css/Comment.css';


export class Comment extends React.Component {
  render () {
    return (
      <section>
        <div className='comment'>
          <NavLink className='author' to={`/users/${this.props.author}`}> {this.props.author}</NavLink>
          <div className='comment-body'>{this.props.body}</div>
          <div className='vote'>
            <button onClick={this.props.commentVote.bind(null, this.props.id, 'up', this.props.comments.data)}>Up</button>
            <div>Votes: {this.props.votes}</div>
            <button onClick={this.props.commentVote.bind(null, this.props.id, 'down',this.props.comments.data)}>Down</button>
          </div>
          {(function (props) {
            if (USERNAME === props.author) {
              return <button onClick={props.commentDelete.bind(null, props.id)}>
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
