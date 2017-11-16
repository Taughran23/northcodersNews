import * as types from './types';

export default function mobileMenu(bool) {
  return function (dispatch) {
    dispatch(mobileMenuRequest());
    return dispatch(mobileMenuSuccess(bool));
     
  };
}

export function mobileMenuRequest() {
  return {
    type: types.MOBILE_MENU_REQUEST
  };
}

export function mobileMenuSuccess(bool) {
    console.log(bool)
  return {
    type: types.MOBILE_MENU_SUCCESS,
    data: !bool
  };
}

export function mobileMenuError(error) {
  return {
    type: types.MOBILE_MENU_ERROR,
    active: error
  };
}