import { Component, OnInit } from '@angular/core';
import { concat, Subscription, switchMap } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: []
})
export class TodoComponent implements OnInit{
  parentArr : ITodo[] = [];

  subscription !: Subscription;
  
  constructor(private task: TodoService){}
  ngOnInit(): void {
    this.task.getAll()
    .subscribe((todos: ITodo[])=> this.parentArr = todos);
  }
  deleteTask(value: number){
    this.task.deleteOne(value).pipe(
      switchMap( () => {
        return this.task.getAll();
      })
    ).subscribe((todos: ITodo[])=> this.parentArr = todos);
  }

  addTask(value: string){
    this.task.createOne(value).pipe(
      switchMap( () => {
        return this.task.getAll();
      })
    ).subscribe((todos: ITodo[])=> this.parentArr = todos);
  }
  
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe(); 
    }
  }
}



// ngOnInit(): void {
//   this.parentArr = this.task.getAll();
// }

// deleteTask(value: number){
//   this.task.deleteOne(value);
//   this.parentArr = this.task.getAll();
// }

// addTask(value: string){
//   this.task.createOne(value);
//   this.parentArr = this.task.getAll();
// }
