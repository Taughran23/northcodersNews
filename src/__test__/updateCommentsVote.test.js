import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import commentVote, {
  commentVoteRequest,
  commentVoteSuccess,
} from '../actions/commentVote';

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
      commentVoteRequest(),
      commentVoteSuccess('success','success','success')
    ];

    const store = mockStore({
      commentId: '',
      vote: '',
      comments: ''
    });
    
    return store.dispatch(commentVote('success','success','success'))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});