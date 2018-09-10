import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { AppState } from '../../reducers';
import { LoadTodos, DeleteTodo, EditTodo } from '../../actions/todo.actions';
import { Todo } from '../../models/todo';
import { getVisibleTodos } from '../../selectors/todo.selectors';
import { TodoModalComponent } from '../todo-modal/todo-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  editTodoModalRef: BsModalRef;

  constructor(private store: Store<AppState>,
    private modalService: BsModalService) {
    this.store.select(getVisibleTodos)
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.store.dispatch(new LoadTodos());
  }

  deleteTodo(todo) {
    this.store.dispatch(new DeleteTodo(todo.id));
  }

  markDone(todo) {
    todo.finished = true;
    todo.finishedAt = new Date();
    this.store.dispatch(new EditTodo(todo));
  }

  openEditModal(todo) {
    const initialState = {
      todo: todo,
    };
    this.editTodoModalRef = this.modalService.show(TodoModalComponent, { initialState });
  }

}
