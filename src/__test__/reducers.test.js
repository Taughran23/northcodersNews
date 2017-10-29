import reducer from '../reducers/index';
import initialState from '../reducers/articles';
import * as types from '../actions/types'; 
import expect from 'expect';

describe('reducers', ()=>{
  it('should be a function', ()=> {
    expect(typeof reducer).toEqual('function');
  });
  describe('fetchArticles', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_ARTICLES_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.articles.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_ARTICLES_SUCCESS,
        articles: ['requested', 'data'],
      };
      const test = reducer(initialState, action); 
      expect(test.articles.data).toEqual(['requested', 'data']);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_ARTICLES_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.articles.error).toEqual('This is an error message');
    });
  });
});