import {createAction} from 'redux-actions'
import {CONFIG} from '../../config/index'
import * as _ from 'lodash'
import {fireAjax} from '../../services/index'

import {show_loading, hide_loading} from '../generic/frontend'

export const ACTION_SUCCESS_SALARY_DETAILS = "ACTION_SUCCESS_SALARY_DETAILS"
export const ACTION_EMPTY_SALARY_DETAILS = "ACTION_EMPTY_SALARY_DETAILS"

export const ACTION_SUCCESS_USER_SALARY_DETAILS = "ACTION_SUCCESS_USER_SALARY_DETAILS"
export const ACTION_EMPTY_USER_SALARY_DETAILS = "ACTION_EMPTY_USER_SALARY_DETAILS"
export const ACTION_ERROR_USER_SALARY_DETAILS = "ACTION_ERROR_USER_SALARY_DETAILS"

export function success_salary_details(data) {
  return createAction(ACTION_SUCCESS_SALARY_DETAILS)(data)
}

export function empty_salary_details(data) {
  return createAction(ACTION_EMPTY_SALARY_DETAILS)(data)
}

function async_get_salary_details() {
  return fireAjax('GET', '', {'action': 'get_salary_details'})
}

export function getSalaryDetails() {

  return function(dispatch, getState) {

    return new Promise((resolve, reject) => {
      dispatch(show_loading()); // show loading icon
      async_get_salary_details().then((json) => {
        dispatch(hide_loading()) // hide loading icon
        if (typeof json.data != 'undefined' && typeof json.data.salary_details != 'undefind') {
          //let data = json.data.salary_details.reverse()
          //dispatch( success_salary_details( data ) )
          dispatch(success_salary_details(json.data))
        } else {
          dispatch(empty_salary_details([]))
        }
      }, (error) => {
        dispatch(hide_loading()) // hide loading icon
        dispatch(success_salary_details([]))
      })
    })
  }
}

export function success_user_salary_details(data) {
  return createAction(ACTION_SUCCESS_USER_SALARY_DETAILS)(data)
}

export function empty__user_salary_details(data) {
  return createAction(ACTION_EMPTY_USER_SALARY_DETAILS)(data)
}

export function error_user_salary_details(data) {
  return createAction(ACTION_ERROR_USER_SALARY_DETAILS)(data)
}

function async_fetch_users_salary_details() {
  return fireAjax('POST', '', {'action': 'get_all_users_detail'})
}

export function fetchUserSalaryDetails() {
  return function(dispatch, getState) {
    return new Promise((resolve, reject) => {
      dispatch(show_loading());
      async_fetch_users_salary_details().then((json) => {
        dispatch(hide_loading())
        if (typeof json.data != 'undefined' && json.data.length > 0) {
          dispatch(success_user_salary_details(json.data))
        } else {
          dispatch(empty__user_salary_details([]))
        }
      }, (error) => {
        dispatch(hide_loading())
        dispatch(error_user_salary_details([]))
      })
    })
  }
}
