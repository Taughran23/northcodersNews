import * as types from './types';
import axios from 'axios';
import {
  ROOT
} from '../../config';

export default function fetchTopicArticles(topicId) {
  return function (dispatch) {
    dispatch(fetchTopicArticlesRequest());
    return axios.get(`${ROOT}/topics/${topicId}/articles`)
      .then(res => {
        return dispatch(fetchTopicArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchTopicArticlesError(err));
      });
  };
}

export function fetchTopicArticlesRequest () {
  return {
    type: types.FETCH_TOPIC_ARTICLES_REQUEST
  };
}

export function fetchTopicArticlesSuccess (topicArticles) {
  return {
    type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
    topicArticles: topicArticles
  };
}

export function fetchTopicArticlesError (error) {
  return {
    type: types.FETCH_TOPIC_ARTICLES_ERROR,
    data: error
  };
}