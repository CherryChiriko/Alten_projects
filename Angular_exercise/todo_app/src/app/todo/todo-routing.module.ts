import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoInfoComponent } from './todo-info/todo-info.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: 'home', component: TodoComponent},
  { path: 'todo/:id', component: TodoInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
