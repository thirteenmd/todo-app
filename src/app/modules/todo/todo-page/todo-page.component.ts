import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../reducers';
import { AddTodo } from '../actions/todo.actions';
import { generateId } from '../../../shared/utils/id-generator';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html'
})
export class TodoPageComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private store: Store<AppState>,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.store.subscribe(res => {
      console.log(res);
    });
  }

  initForm() {
    this.todoForm = this.formBuilder.group({
      id: generateId(),
      name: ['', [Validators.required]],
      finished: false,
      finishedAt: null,
      description: ['', [Validators.required]]
    });
  }

  get name() {
    return this.todoForm.controls.name;
  }

  get description() {
    return this.todoForm.controls.description;
  }

  addTodo() {
    this.store.dispatch(new AddTodo(this.todoForm.value));
    this.todoForm.reset();
  }
}
