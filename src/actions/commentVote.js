import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../config';

export default function commentVote (id, vote, comments) {
  return function (dispatch) {
    dispatch(commentVoteRequest());
    return axios.put(`${ROOT}/comments/${id}?vote=${vote}`)
      .then(() => {
        return dispatch(commentVoteSuccess(id, vote, comments));
      })
      .catch((error) => {
        dispatch(commentVoteError(error));
      });
  };
}


export function commentVoteRequest () {
  return {
    type: types.COMMENT_VOTE_REQUEST
  };
}

export function commentVoteSuccess (commentId, vote, comments) {
  return {
    type: types.COMMENT_VOTE_SUCCESS,
    commentId, 
    vote, 
    comments
  };
}

export function commentVoteError (error) {
  return {
    type: types.COMMENT_VOTE_ERROR,
    data: error
  };
}