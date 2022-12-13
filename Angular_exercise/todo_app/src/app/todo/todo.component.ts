import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: []
})
export class TodoComponent implements OnInit{
  parentArr : ITodo[] = [];
  constructor(private task: TodoService){}
  ngOnInit(): void {
    this.parentArr = this.task.getAll();
  }

  deleteTask(value: number){
    this.task.deleteOne(value);
    this.parentArr = this.task.getAll();
    console.log(this.parentArr)
  }

  addTask(value: string){
    this.task.createOne(value);
    this.parentArr = this.task.getAll();
    console.log(this.parentArr)
  }
  
}
