import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../reducers';
import { AddTodo } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private store: Store<AppState>,
    private formBuilder: FormBuilder) {
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
}
