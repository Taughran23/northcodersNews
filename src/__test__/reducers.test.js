import { reducer } from '../reducers/index';
import initialState from '../reducers/index';
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
  describe('fetchTopicTitles', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_TOPIC_TITLES_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.topics.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_TOPIC_TITLES_SUCCESS,
        topics: ['football', 'coding','cooking'],
      };
      const test = reducer(initialState, action); 
      expect(test.topics.data).toEqual(['football', 'coding','cooking']);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_TOPIC_TITLES_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.topics.error).toEqual('This is an error message');
    });
  });
  describe('fetchTopicArticles', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.topicArticles.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
        topicArticles: [1, 2, 3],
      };
      const test = reducer(initialState, action); 
      expect(test.topicArticles.data).toEqual([1, 2, 3]);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.topicArticles.error).toEqual('This is an error message');
    });
  });
});