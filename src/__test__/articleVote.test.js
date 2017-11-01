import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import articleVote, {
  articleVoteRequest,
  articleVoteSuccess,
} from '../actions/articleVote';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });
  it('dispatches COMMENT_VOTE_SUCCESS when fetching articles reponds with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const expectedActions = [
      articleVoteRequest(),
      articleVoteSuccess('success','success','success')
    ];

    const store = mockStore({
      articleId: '',
      vote: '',
      comments: ''
    });
    
    return store.dispatch(articleVote('success','success','success'))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});