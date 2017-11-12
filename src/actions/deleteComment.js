import axios from 'axios';
import * as types from './types';

import {
  ROOT
} from '../config';

export default function commentDelete (id) {
  return function (dispatch) {
    dispatch(commentDeleteRequest());
    axios.delete(`${ROOT}/comments/${id}`)
      .then(() => {
        dispatch(commentDeleteSuccess(id));
      })
      .catch((err) => {
        dispatch(commentDeleteError(err));
      });
  };
}

export function commentDeleteRequest () {
  return {
    type: types.COMMENT_DELETE_REQUEST
  };
}

export function commentDeleteSuccess (id) {
  return {
    type: types.COMMENT_DELETE_SUCCESS,
    id 
  };
}

export function commentDeleteError (error) {
  return {
    type: types.COMMENT_DELETE_ERROR,
    data: error
  };
}