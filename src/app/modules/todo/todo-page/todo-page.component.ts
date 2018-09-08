import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { AppState } from '../todo.state';
import { AddTodo, LoadTodos, DeleteTodo, EditTodo } from '../actions/todo.actions';
import { Todo } from '../models/todo';
import { TodoModalComponent } from '../todo-modal/todo-modal.component'
import * as VisibilityFilterActions from '../actions/visibility-filter.actions';
import { getVisibleTodos, getVisibilityFilter } from '../selectors/todo.selectors'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todoForm: FormGroup;
  submitted = false;
  bsModalRef: BsModalRef;

  todos: Todo[];
  todosFilter: string;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private modalService: BsModalService) {
    this.store.select(getVisibleTodos)
      .subscribe(todos => {
        this.todos = todos;
      });
    this.store.select(getVisibilityFilter)
      .subscribe(todos => {
        this.todosFilter = todos;
      });
  }

  ngOnInit() {
    this.initForm();
    this.getTodos();
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

  getTodos() {
    this.store.dispatch(new LoadTodos());
  }

  deleteTodo(todo) {
    this.store.dispatch(new DeleteTodo(todo.id));
  }

  openEditModal(todo) {
    const initialState = {
      todo: todo,
    };
    this.bsModalRef = this.modalService.show(TodoModalComponent, { initialState });
  }

  markDone(todo) {
    todo.finished = true;
    todo.finishedAt = new Date();
    this.store.dispatch(new EditTodo(todo));
  }

  setVisibilityFilter(filter) {
    switch (filter) {
      case 'finished': {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter('SHOW_FINISHED'));
        break;
      }
      case 'notFinished': {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter('SHOW_NOT_FINISHED'));
        break;
      }
      default: {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter('SHOW_ALL'));
        break;
      }
    }
  }


}
