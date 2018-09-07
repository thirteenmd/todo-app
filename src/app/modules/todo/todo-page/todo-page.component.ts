import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../todo.state';
import { AddTodo, LoadTodos, DeleteTodo, EditTodo } from '../actions/todo.actions';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TodoModalComponent } from '../todo-modal/todo-modal.component'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todoForm: FormGroup;
  submitted = false;
  bsModalRef: BsModalRef;

  todos: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private modalService: BsModalService) {
    this.todos = this.store.select(state => state.todos);
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
      id: null,
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
}
