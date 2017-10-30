import * as types from '../actions/types';
import { initialState } from './index.js';

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_TOPIC_TITLES_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });
  case types.FETCH_TOPIC_TITLES_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.topics
    });
  case types.FETCH_TOPIC_TITLES_ERROR:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.data,
      data: []
    });
  default:
    return prevState;
  }
};