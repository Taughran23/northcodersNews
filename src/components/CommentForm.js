import React from 'react';
import PropTypes from 'prop-types';

import '../css/CommentForm.css';

const CommentForm = (props) => (
  <div className='comment-form'>
    <form className='form' onSubmit={props.submitHandler}>
      <textarea
        className="textarea"
        placeholder="Post comment"
        value={props.input}
        onChange={props.inputHandler}
      />
      <button
        className="button"
        type="submit"
        value="post"
      >
      Post comment
      </button>
    </form>

  </div>   
);

CommentForm.propTypes = {
  input: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired, 
  inputHandler: PropTypes.func.isRequired
};

export default CommentForm;