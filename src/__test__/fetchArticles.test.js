import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import fetchArticles, {
  fetchArticlesRequest,
  fetchArticlesSuccess,
} from '../actions/articles';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });
  it('dispatches FETCH_ARTICLES_SUCCESS when fetching articles reponds with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {articles: [1, 2, 3]},
      });
    });
    const expectedActions = [
      fetchArticlesRequest(),
      fetchArticlesSuccess([1, 2, 3])
    ];

    const store = mockStore({
      articles: []
    });
    
    return store.dispatch(fetchArticles())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});