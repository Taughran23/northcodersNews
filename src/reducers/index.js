import {combineReducers} from 'redux';

import articles from './articles';
import topics from './topics';
import topicArticles from './topicsArticles';

export const initialState = {
  loading: false,
  error: null, 
  data:[]
};

export const reducer = combineReducers({
  articles, topics, topicArticles
});

export default reducer;

