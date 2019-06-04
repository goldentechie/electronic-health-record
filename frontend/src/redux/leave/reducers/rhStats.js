import Immutable from 'immutable';

let initialState = {
  data:    [],
};

export function rhStats (state = Immutable.fromJS(initialState), action) {
  if (action.type === 'ACTION_GET_RH_STATS_SUCCESS') {
    return state.set('data', action.payload);
  } else if (action.type === 'ACTION_LIST_LEAVES_EMPTY') {
    return state;
  } else if (action.type === 'ACTION_LIST_LEAVES_ERROR') {
    return state;
  } else {
    return state;
  }
}