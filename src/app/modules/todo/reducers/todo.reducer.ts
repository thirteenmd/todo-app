import { Action } from '@ngrx/store';
import { TodoActionsUnion, TodoActionTypes } from '../actions/todo.actions';
import { Todo } from '../models/todo';

export interface State {
  loaded: boolean,
  loading: boolean,
  todos: Todo[]
}

export const initialState: State = {
  loaded: false,
  loading: false,
  todos: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case TodoActionTypes.LoadTodos: {
      return {
        ...state,
        loading: true
      };
    }
    case TodoActionTypes.LoadTodosSuccess: {
      return {
        loaded: true,
        loading: false,
        todos: action.payload
      }
    }
    case TodoActionTypes.AddTodoSuccess:
    case TodoActionTypes.DeleteTodoFail: {
      if (state.todos.find(action.payload)) {
        return state;
      }

      return {
        ...state,
        todos: [...state.todos, action.paylaod]
      }
    }

    case TodoActionTypes.DeleteTodoSuccess:
    case TodoActionTypes.AddTodoFail: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)
      }
    }

    default:
      return state;
  }
}
