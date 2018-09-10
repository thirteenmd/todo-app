import { ActionReducerMap } from '@ngrx/store';

import { todoReducer } from './todo.reducer';
import { visibilityFilterReducer } from './visibility-filter.reducer';

import { Todo } from '../models/todo';

export interface AppState {
  readonly todos: Todo[];
  readonly visibilityFilter: string;
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer
};
