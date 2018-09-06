import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  },
  {
    path: 'todo',
    component: TodoPageComponent
  }
];

export const TodoRoute: ModuleWithProviders = RouterModule.forChild(routes);
