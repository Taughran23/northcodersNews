
import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../../config';

export default function addComment(id, comment) {
  return function (dispatch) {
    dispatch(addCommentRequest());
    return axios.post(`${ROOT}/articles/${id}/comments`, {comment})
      .then(res => {
        return dispatch(addCommentSuccess(res.data.comment));
      })
      .catch(err => {
        dispatch(addCommentError(err.message));
      });
  };
}

export function addCommentRequest() {
  return {
    type: types.ADD_COMMENT_REQUEST
  };
}

export function addCommentSuccess(comment) {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    data: comment
  };
}

export function addCommentError(error) {
  return {
    type: types.ADD_COMMENT_ERROR,
    data: error
  };
}