import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { appRoutes } from './app.routes';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoEffects } from './modules/todo/effects/todo.effects';
import { todoReducer } from './modules/todo/reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    CoreModule,
    HttpClientModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({
      todos: todoReducer
    }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
