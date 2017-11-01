import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  expect
} from 'chai';
import userProfile, {
  userProfileRequest,
  userProfileSuccess,
} from '../actions/userProfile';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });
  it('dispatches USER_PROFILE_SUCCESS when fetching user profile reponds with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response:  'northcoder',
      });
    });
    const expectedActions = [
      userProfileRequest(),
      userProfileSuccess('northcoder')
    ];

    const store = mockStore({
      articles: []
    });
    
    return store.dispatch(userProfile())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });

  });
});