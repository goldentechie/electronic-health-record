import {createAction} from 'redux-actions';
import * as constants from 'appRedux/constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginFail = createAction(constants.USER_LOGIN_FAIL);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);
export const isAlreadyLogin = createAction(constants.IS_ALREADY_LOGGED_IN);

export const requestForgotPassword = createAction(constants.REQUEST_FORGOT_PASSWORD);
export const forgotPasswordSuccess = createAction(constants.SUCCESS_FORGOT_PASSWORD);
export const forgotPasswordError = createAction(constants.ERROR_FORGOT_PASSWORD);

export const requestLogout = createAction(constants.REQUEST_LOGOUT);
export const logoutSuccess = createAction(constants.LOGOUT_SUCCESS);
