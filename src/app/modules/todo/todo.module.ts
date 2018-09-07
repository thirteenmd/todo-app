import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoRoute } from './todo.routes';

@NgModule({
  imports: [
    CommonModule,
    TodoRoute,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [TodoPageComponent],
  exports: [TodoPageComponent]
})
export class TodoModule { }
