import { createSelector} from '@ngrx/store';
import {AppState} from '../todo.state';
import {Todo} from '../models/todo';

export const getState = (state: AppState) => state;
export const getVisibilityFilter = (state: AppState) => state.visibilityFilter;
export const getTodos = (state: AppState) => state.todos;

export const getVisibleTodos = createSelector(
    getTodos,
    getVisibilityFilter,
    (todos: Todo[], filter: string) => {
        switch (filter){
            default:
            case 'SHOW_ALL':
            return todos;
            case 'SHOW_FINISHED':
            return todos.filter(todo => todo.finished);
            case 'SHOW_NOT_FINISHED':
            return todos.filter(todo => !todo.finished);
        }
    }
)