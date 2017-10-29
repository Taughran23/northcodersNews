import * as types from '../actions/types';
import { initialState }from './index.js';

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_ARTICLES_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });
  case types.FETCH_ARTICLES_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.articles
    });
  case types.FETCH_ARTICLES_ERROR:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.data,
      data: []
    });
  default:
    return prevState;
  }
};