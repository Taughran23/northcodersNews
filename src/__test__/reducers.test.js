import reducer  from '../reducer/reducer';
import {initialState} from '../reducer/reducer';
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
      expect(test.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_ARTICLES_SUCCESS,
        data: ['requested', 'data'],
      };
      const test = reducer(initialState, action); 
      expect(test.articles).toEqual(['requested', 'data']);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_ARTICLES_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
  describe('fetchTopicTitles', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_TOPIC_TITLES_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_TOPIC_TITLES_SUCCESS,
        data: ['football', 'coding','cooking'],
      };
      const test = reducer(initialState, action); 
      expect(test.topics).toEqual(['football', 'coding','cooking']);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_TOPIC_TITLES_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
  describe('fetchArticle', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
        data: [1, 2, 3],
      };
      const test = reducer(initialState, action); 
      expect(test.articles).toEqual([1, 2, 3]);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
  describe('fetchTopicArticles', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_ARTICLE_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_ARTICLE_SUCCESS,
        data: {author: 'northcoder'},
      };
      const test = reducer(initialState, action); 
      expect(test.article).toEqual({author: 'northcoder'});
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_ARTICLE_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
  describe('fetchArticle', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
        data: [1, 2, 3],
      };
      const test = reducer(initialState, action); 
      expect(test.articles).toEqual([1, 2, 3]);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_TOPIC_ARTICLES_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
  describe('fetchComment', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.FETCH_COMMENTS_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.loading).toEqual(true);
    });
    it('returns with the requested data', ()=> {
      const action = {
        type: types.FETCH_COMMENTS_SUCCESS,
        data: [1,2,3],
      };
      const test = reducer(initialState, action); 
      expect(test.comments).toEqual([1,2,3]);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.FETCH_COMMENTS_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
  describe('commentVote', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.COMMENT_VOTE_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.loading).toEqual(true);
    });
    it('should return newState.loading = true', () => {
      const commentId = 1;
      const vote = 'up';
      const comments = [1,2,3];
      const action = {
        type: types.COMMENT_VOTE_SUCCESS,
        commentId, 
        vote, 
        comments
      };
      const test = reducer(initialState, action); 
      expect(test.loading).toEqual(false);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.COMMENT_VOTE_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
  describe('addComment', ()=> {
    it('should return newState.loading = true', () => {
      const action = {
        type: types.ADD_COMMENT_REQUEST,
      };
      const test = reducer(initialState, action);   
      expect(test.loading).toEqual(true);
    });
    it('should return newState.loading = true', () => {
      const action = {
        type: types.ADD_COMMENT_SUCCESS,
        data: 'comment'
      };
      const test = reducer(initialState, action); 
      expect(test.comments).toEqual(['comment']);
    });
    it('returns an error if passed the error action', () => {
      const action = {
        type: types.ADD_COMMENT_ERROR,
        data: 'This is an error message'
      };
      const test = reducer(initialState, action);
      expect(test.error).toEqual('This is an error message');
    });
  });
});