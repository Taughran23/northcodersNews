import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../config';

export default function articleVote (id, vote) {
  return function (dispatch) {
    dispatch(articleVoteRequest());
    return axios.put(`${ROOT}/articles/${id}?vote=${vote}`)
      .then(() => {
        return  dispatch(articleVoteSuccess(id, vote));
      })
      .catch((err) => {
        dispatch(articleVoteError(err));
      });
  };
}

export function articleVoteRequest () {
  return {
    type: types.ARTICLE_VOTE_REQUEST
  };
}

export function articleVoteSuccess (articleId, vote) {
  return {
    type: types.ARTICLE_VOTE_SUCCESS,
    articleId, 
    vote
  };
}

export function articleVoteError (error) {
  return {
    type: types.ARTICLE_VOTE_ERROR,
    data: error
  };
}
