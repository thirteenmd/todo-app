import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { Store } from '@ngrx/store';

import { AppState } from '../todo.state';
import { EditTodo } from '../actions/todo.actions'

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css']
})
export class TodoModalComponent implements OnInit {

  editForm: FormGroup;

  todo;

  constructor(private store: Store<AppState>,
    public editTodoModalRef: BsModalRef) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editForm = new FormGroup({
      id: new FormControl(this.todo.id),
      name: new FormControl(this.todo.name, [Validators.required]),
      finished: new FormControl(this.todo.finished),
      finishedAt: new FormControl(this.todo.finishedAt),
      description: new FormControl(this.todo.description, [Validators.required])
    });
  }

  get f() {
    return this.editForm.controls;
  }

  editTodo() {
    this.store.dispatch(new EditTodo(this.editForm.value));
    this.editTodoModalRef.hide();
  }

  onClose() {
    this.editTodoModalRef.hide();
  }

}
