import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoRoutingModule } from './todo/todo-routing.module';
import { TodoInfoComponent } from './todo/todo-info/todo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    TodoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
