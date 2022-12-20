import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/signup'},
  { path: 'signup', pathMatch: 'full', component: FormComponent}
  // { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
