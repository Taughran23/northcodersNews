import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import fetchComments, {
  fetchCommentsRequest,
  fetchCommentsSuccess,
} from '../actions/comment';

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
        response: {data: [1, 2, 3]},
      });
    });
    const expectedActions = [
      fetchCommentsRequest(),
      fetchCommentsSuccess({data:[1, 2, 3]})
    ];

    const store = mockStore({
      data: []
    });
    
    return store.dispatch(fetchComments())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});