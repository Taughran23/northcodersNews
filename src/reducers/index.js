import {combineReducers} from 'redux';

import articles from './articles';

export const initialState = {
  loading: false,
  error: null,
  data: []
};

const reducer = combineReducers({
  articles
});

export default reducer;