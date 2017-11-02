
import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../config';

export default function fetchComments(articleID) {
  return function (dispatch) {
    dispatch(fetchCommentsRequest());
    return axios.get(`${ROOT}/articles/${articleID}/comments`)
      .then(res => {
        return dispatch(fetchCommentsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchCommentsError(err.message));
      });
  };
}

export function fetchCommentsRequest() {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function fetchCommentsSuccess(comments) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    data: comments
  };
}

export function fetchCommentsError(error) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    comments: error
  };
}
