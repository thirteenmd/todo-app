import { createSelector } from '@ngrx/store';
import { AppState } from '../todo.state';
import { Todo } from '../models/todo';
import * as FilterValues from '../../../shared/constants/visibility-filter';

export const getState = (state: AppState) => state;
export const getVisibilityFilter = (state: AppState) => state.visibilityFilter;
export const getTodos = (state: AppState) => state.todos;

export const getVisibleTodos = createSelector(
    getTodos,
    getVisibilityFilter,
    (todos: Todo[], filter: string) => {
        switch (filter) {
            default:
            case FilterValues.SHOW_ALL:
                return todos;
            case FilterValues.SHOW_FINISHED:
                return todos.filter(todo => todo.finished);
            case FilterValues.SHOW_NOT_FINISHED:
                return todos.filter(todo => !todo.finished);
        }
    }
)