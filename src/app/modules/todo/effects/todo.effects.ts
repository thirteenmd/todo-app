import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import { BackendService } from '../../../core/services/backend.service';

import { environment } from '../../../../environments/environment';
import {
  TodoActionTypes,
  AddTodo,
  AddTodoSuccess,
  DeleteTodo,
  DeleteTodoSuccess,
  LoadTodos,
  LoadTodosSuccess,
  EditTodo,
  EditTodoSuccess,
  RequestFeiled
} from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private jsonServer: BackendService) { }

  @Effect()
  getTodos$: Observable<Action> = this.actions$.pipe(
    ofType<LoadTodos>(TodoActionTypes.LoadTodos),
    mergeMap(() =>
      this.jsonServer.httpRequest('GET', '/todos').pipe(
        map((todos: Response) => {
          return new LoadTodosSuccess(todos);
        }),
        catchError((error) => of(new RequestFeiled(error)))
      ))
  );

  @Effect()
  createTodo$: Observable<Action> = this.actions$.pipe(
    ofType<AddTodo>(TodoActionTypes.AddTodo),
    mergeMap(action =>
      this.jsonServer.httpRequest('POST', '/todos', action.payload).pipe(
        map((todo: Response) => {
          return new AddTodoSuccess(todo);
        }),
        catchError((error) => of(new RequestFeiled(error)))
      )
    )
  );

  @Effect()
  deleteTodo$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteTodo>(TodoActionTypes.DeleteTodo),
    mergeMap(action =>
      this.jsonServer.httpRequest('DELETE', '/todos/' + action.payload.id).pipe(
        map(() => {
          return new DeleteTodoSuccess(action.payload);
        }),
        catchError((error) => of(new RequestFeiled(error)))
      )
    )
  );

  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType<EditTodo>(TodoActionTypes.EditTodo),
    mergeMap(action =>
      this.jsonServer.httpRequest('PUT', '/todo/' + action.payload.id, action.payload.updatedTodo).pipe(
        map(() => {
          return new EditTodoSuccess(action.payload);
        }),
        catchError((error) => of(new RequestFeiled(error)))
      )
    )
  );
}
