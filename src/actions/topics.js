import * as types from './types';
import axios from 'axios';
import {
  ROOT
} from '../../config';

export default function fetchTopicTitles() {
  return function (dispatch) {
    dispatch(fetchTopicTitlesRequest());
    return axios.get(`${ROOT}/topics`)
      .then(res => {
        return dispatch(fetchTopicTitlesSuccess(res.data.topics));
      })
      .catch(err => {
        dispatch(fetchTopicTitlesError(err));
      });
  };
}

export function fetchTopicTitlesRequest () {
  return {
    type: types.FETCH_TOPIC_TITLES_REQUEST
  };
}

export function fetchTopicTitlesSuccess (topicsTitles) {
  return {
    type: types.FETCH_TOPIC_TITLES_SUCCESS,
    topics: topicsTitles
  };
}

export function fetchTopicTitlesError (error) {
  return {
    type: types.FETCH_TOPIC_TITLES_ERROR,
    data: error
  };
}
