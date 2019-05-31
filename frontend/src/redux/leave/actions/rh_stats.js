import { createAction } from "redux-actions";
import * as _ from "lodash";
import * as jwt from "jwt-simple";
import { CONFIG } from "../../../config/index";
import { fireAjax } from "../../../services/index";
import * as constants from "../../../redux/constants";
import {
  show_loading,
  hide_loading
} from "../../../redux/generic/actions/frontend";

export function getRHStatSuccess(data) {
  return createAction(constants.ACTION_GET_RH_STATS_SUCCESS)(data);
}

export function getRHStatError(data) {
  return createAction(constants.ACTION_GET_RH_STATS_ERROR)(data);
}

function async_getRHStats(year) {
  return fireAjax("POST", "", {
    'action': "get_all_users_rh_stats",
    'year': year,
  });
}

export function getRHStats(year) {
  return function(dispatch, getState) {
    return new Promise((reslove, reject) => {
      dispatch(show_loading()); // show loading icon
      async_getRHStats(year).then(
        json => {
          dispatch(hide_loading()); // hide loading icon
          if (json.error == 0) {
            dispatch(getRHStatSuccess(json.data));
          } else {
            dispatch(getRHStatError(json.data.message));
          }
        },
        error => {
          dispatch(hide_loading()); // hide loading icon
          dispatch(getRHStatError(error.data.message));
        }
      );
    });
  };
}
