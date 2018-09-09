import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../reducers';
import { AddTodo } from '../actions/todo.actions';
import { Todo } from '../models/todo';
import { getVisibilityFilter } from '../selectors/todo.selectors';
import * as VisibilityFilterActions from '../actions/visibility-filter.actions';
import * as FilterValues from '../../../shared/constants/visibility-filter';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todoForm: FormGroup;

  todos: Todo[];
  todosFilter: string;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder) {
    this.store.select(getVisibilityFilter)
      .subscribe(todos => {
        this.todosFilter = todos;
      });
  }

  ngOnInit() {
    this.initForm();
    this.store.subscribe(res => {
      console.log(res)
    });
  }

  initForm() {
    this.todoForm = this.formBuilder.group({
      id: Math.floor(Math.random() * Math.floor(100000)),
      name: ['', [Validators.required]],
      finished: false,
      finishedAt: null,
      description: ['', [Validators.required]]
    });
  }

  get f() {
    return this.todoForm.controls;
  }

  addTodo() {
    this.store.dispatch(new AddTodo(this.todoForm.value));
    this.todoForm.reset();
  }

  setVisibilityFilter(filter) {
    switch (filter) {
      case 'finished': {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter(FilterValues.SHOW_FINISHED));
        break;
      }
      case 'notFinished': {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter(FilterValues.SHOW_NOT_FINISHED));
        break;
      }
      default: {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter(FilterValues.SHOW_ALL));
        break;
      }
    }
  }
}
