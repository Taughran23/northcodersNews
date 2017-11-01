import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import addComment, {
  addCommentRequest,
  addCommentSuccess,
} from '../actions/addComment';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });
  it('dispatches ADD_COMMENT_SUCCESS when fetching articles reponds with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200, 
        response: {comment:'comment'}
      });
    });
    const expectedActions = [
      addCommentRequest(),
      addCommentSuccess('comment')
    ];

    const store = mockStore({

    });
    
    return store.dispatch(addComment('1','comment'))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});