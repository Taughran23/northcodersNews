import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import fetchArticle, {
  fetchArticleRequest,
  fetchArticleSuccess,
} from '../actions/article';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });
  it('dispatches FETCH_ARTICLE_SUCCESS when fetching an article reponds with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {article: {author:'northcoder'}},
      });
    });
    const expectedActions = [
      fetchArticleRequest(),
      fetchArticleSuccess({author:'northcoder'})
    ];

    const store = mockStore({
      articles: []
    });
    
    return store.dispatch(fetchArticle())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});