import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import fetchArticle from '../actions/article';
import fetchComments from '../actions/comment';
import addComment from '../actions/addComment';
import commentVote from '../actions/commentVote';
import Comment from './Comment';
import CommentForm from './CommentForm';

import '../css/Article.css';

export class Article extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentTextInput: ''
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  inputHandler(e) {
    this.setState({
      commentTextInput: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addComment(this.props.match.params.article_id, this.state.commentTextInput);
    this.setState({ commentTextInput: '' });
  }


  componentDidMount() {
    const article_id = this.props.match.params.article_id;
    this.props.fetchArticle (article_id);
    this.props.fetchComments(article_id);
  }

  render () {
    return (
      <div id='Article'>
        <div className="is-8">
          <div className="article">
            <h1 className="title"><b>{this.props.article.title}</b></h1>
            <div className='author'>
              <NavLink to={`/users/${this.props.article.created_by}`}className="subtitle author"> {this.props.article.created_by}</NavLink>
            </div>
            <p className="">{this.props.article.body}</p>
          </div>
        </div>
        <div className='comment'>
          <CommentForm 
            input={this.state.commentTextInput} 
            inputHandler={this.inputHandler} 
            submitHandler={this.submitHandler}/> 
        </div>
        <div className='comments-container'>
          {this.props.comments.map((comment) => {
            return <Comment 
              body={comment.body}
              author={comment.created_by}
              votes={comment.votes}
              key={comment._id}
              id={comment._id}
              commentVote={this.props.commentVote}/>;
          })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticle: (id) => {
      dispatch(fetchArticle(id));
    }, 
    fetchComments: (id) => {
      dispatch(fetchComments(id));
    },
    commentVote: (id, vote, comments) => {
      dispatch(commentVote(id, vote, comments));
    },

    addComment: (id, comment) => {
      dispatch(addComment(id, comment));
    }
  };
}

function mapStateToProps (state) {

  return {
    article: state.article, 
    comments: state.comments
  };
}

Article.propTypes = {
  addComment: PropTypes.func.isRequired,
  fetchArticle: PropTypes.func.isRequired, 
  fetchComments: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  commentVote: PropTypes.func.isRequired, 
  match: PropTypes.object.isRequired,
  
};


export default connect(mapStateToProps, mapDispatchToProps)(Article);