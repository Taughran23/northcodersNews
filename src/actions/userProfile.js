import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../../config';

export default function userProfile (username) {

  return function (dispatch) {
    dispatch(userProfileRequest());
    return axios.get(`${ROOT}/users/${username}`)
      .then((res) => {
          console.log(res.data)
        return dispatch(userProfileSuccess(res.data));
      })
      .catch((err) => {
        dispatch(userProfileError(err));
      });
  };
}

export function userProfileRequest () {
  return {
    type: types.USER_PROFILE_REQUEST
  };
}

export function userProfileSuccess (data) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile: data 
  };
}

export function userProfileError (error) {
  return {
    type: types.USER_PROFILE_ERROR,
    data: error
  };
}