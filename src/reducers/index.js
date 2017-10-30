import {combineReducers} from 'redux';

import articles from './articles';
import topics from './topics';

export const initialState = {
  loading: false,
  error: null, 
  data:[]
};

export const reducer = combineReducers({
  articles, topics
});

export default reducer;

