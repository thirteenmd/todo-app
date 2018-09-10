import * as FilterActions from '../actions/visibility-filter.actions';

export function visibilityFilterReducer(state: String = 'SHOW_ALL', action: FilterActions.SetVisibilityFilter) {
  if (!action) {
    return action;
  }
  switch (action.type) {
    case FilterActions.SetFilter: {
      return action.payload;
    }
    default:
      return state;
  }
}
