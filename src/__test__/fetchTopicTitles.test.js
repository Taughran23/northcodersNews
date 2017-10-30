import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import fetchTopicTitles, {
  fetchTopicTitlesRequest,
  fetchTopicTitlesSuccess,
} from '../actions/topics';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });
  it('dispatches FETCH_TOPIC_TITLES_SUCCESS when fetching articles reponds with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {topics: [1, 2, 3]},
      });
    });
    const expectedActions = [
      fetchTopicTitlesRequest(),
      fetchTopicTitlesSuccess([1, 2, 3])
    ];

    const store = mockStore({
      topics: []
    });
    
    return store.dispatch(fetchTopicTitles())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});