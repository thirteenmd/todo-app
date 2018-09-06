import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todo] Load Todos Success',
  LoadTodosFail = '[Todo] Load Todos Fail',
  AddTodo = '[Todo] Add Todo',
  AddTodoSuccess = '[Todo] Add Todo Success',
  AddTodoFail = '[Todo] Add Todo Fail',
  DeleteTodo = '[Todo] Delete Todo',
  DeleteTodoSuccess = '[Todo] Delete Todo Success',
  DeleteTodoFail = '[Todo] Delete Todo Fail',
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;

  constructor(public payload: Todo[]) { }
}

export class LoadTodosFail implements Action {
  readonly type = TodoActionTypes.LoadTodosFail;

  constructor(public payload: any) { }
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: Todo) { }
}

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.AddTodoSuccess;

  constructor(public payload: Todo) { }
}

export class AddTodoFail implements Action {
  readonly type = TodoActionTypes.AddTodoFail;

  constructor(public payload: Todo) { }
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: Todo) { }
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DeleteTodoSuccess;

  constructor(public payload: Todo) { }
}

export class DeleteTodoFail implements Action {
  readonly type = TodoActionTypes.DeleteTodoFail;

  constructor(public payload: Todo) { }
}

export type TodoActionsUnion =
  | AddTodo
  | AddTodoSuccess
  | AddTodoFail
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoFail
  | LoadTodos
  | LoadTodosSuccess
  | LoadTodosFail;
