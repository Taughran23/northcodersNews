
import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../config';

export default function fetchArticle(articleID) {
  return function (dispatch) {
    dispatch(fetchArticleRequest());
    return axios.get(`${ROOT}/articles/${articleID}`)
      .then(res => {
        return dispatch(fetchArticleSuccess(res.data.article));
      })
      .catch(err => {
        dispatch(fetchArticleError(err.message));
      });
  };
}

export function fetchArticleRequest() {
  return {
    type: types.FETCH_ARTICLE_REQUEST
  };
}

export function fetchArticleSuccess(article) {
  return {
    type: types.FETCH_ARTICLE_SUCCESS,
    data: article
  };
}

export function fetchArticleError(error) {
  return {
    type: types.FETCH_ARTICLE_ERROR,
    articles: error
  };
}