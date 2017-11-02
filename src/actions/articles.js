
import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../config';

export default function fetchArticles() {
  return function (dispatch) {
    dispatch(fetchArticlesRequest());
    return axios.get(`${ROOT}/articles`)
      .then(res => {
        return dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchArticlesError(err.message));
      });
  };
}

export function fetchArticlesRequest() {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess(articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles
  };
}

export function fetchArticlesError(error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    articles: error
  };
}