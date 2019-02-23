import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todo] Load Todos Success',
  AddTodo = '[Todo] Add Todo',
  AddTodoSuccess = '[Todo] Add Todo Success',
  DeleteTodo = '[Todo] Delete Todo',
  DeleteTodoSuccess = '[Todo] Delete Todo Success',
  EditTodo = '[Todo] Edit Todo',
  EditTodoSuccess = '[Todo] Edit Todo Success',
  RequestFailed = '[Todo] Request Failed'
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;

  constructor(public payload: any) { }
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: any) { }
}

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.AddTodoSuccess;

  constructor(public payload: any) { }
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: any) { }
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DeleteTodoSuccess;

  constructor(public payload: any) { }
}

export class EditTodo implements Action {
  readonly type = TodoActionTypes.EditTodo;

  constructor(public payload: any) { }
}

export class EditTodoSuccess implements Action {
  readonly type = TodoActionTypes.EditTodoSuccess;

  constructor(public payload: any) { }
}

export class RequestFeiled implements Action {
  readonly type = TodoActionTypes.RequestFailed;

  constructor(public payload: any) {
  }
}
