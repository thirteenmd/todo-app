import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoRoute } from './todo.routes';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoute,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  declarations: [TodoPageComponent, TodoModalComponent, TodoListComponent],
  entryComponents: [TodoModalComponent],
  exports: [TodoPageComponent]
})
export class TodoModule { }
