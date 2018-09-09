import { ActionReducerMap } from '@ngrx/store';

import { todoReducer } from './todo.reducer';
import { visibilityFilterReducer } from './visibility-filter.reducer';

import { AppState } from '../todo.state';

export const rootReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
}