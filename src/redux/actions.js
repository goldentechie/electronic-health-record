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

export const requestHolidayList = createAction(constants.REQUEST_HOLIDAYSLIST);
export const successHolidayList = createAction(constants.SUCCESS_HOLIDAYSLIST);
export const errorHolidayList = createAction(constants.ERROR_HOLIDAYSLIST);

export const requestUserAttendance = createAction(constants.REQUEST_USER_ATTENDANCE);
export const successUserAttendance = createAction(constants.SUCCESS_USER_ATTENDANCE);
export const errorUserAttendance = createAction(constants.ERROR_USER_ATTENDANCE);
// -===-
export const requestUserDaySummary = createAction(constants.REQUEST_USER_DAY_SUMMARY);
export const successUserDaySummary = createAction(constants.SUCCESS_USER_DAY_SUMMARY);
export const errorUserDaySummary = createAction(constants.ERROR_USER_DAY_SUMMARY);

export const requestUpdateUserDaySummary = createAction(constants.REQUEST_UPDATE_USER_DAY_SUMMARY);
export const successUpdateUserDaySummary = createAction(constants.SUCCESS_UPDATE_USER_DAY_SUMMARY);
export const errorUpdateUserDaySummary = createAction(constants.ERROR_UPDATE_USER_DAY_SUMMARY);

export const requestUsersList = createAction(constants.REQUEST_USERSLIST);
export const successUsersList = createAction(constants.SUCCESS_USERSLIST);
export const errorUsersList = createAction(constants.ERROR_USERSLIST);

export const requestFetchPolicyDocuments = createAction(constants.REQUEST_POLICY_DOCUMENT);
export const successFetchPolicyDocuments = createAction(constants.POLICY_DOCUMENT_SUCCESS);
export const errorFetchPolicyDocuments = createAction(constants.POLICY_DOCUMENT_FAIL);
