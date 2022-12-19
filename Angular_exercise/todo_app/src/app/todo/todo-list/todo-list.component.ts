import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: []
})

export class TodoListComponent implements OnInit{
  @Input() arr: ITodo[] = [];
  @Output() newEvent = new EventEmitter<number>();

  isTodo: boolean = true;

  constructor(){}
  ngOnInit(): void {}

  deleteTaskChild(value:number){
    this.newEvent.emit(value);
  }

  toggleState(){
    this.isTodo = !this.isTodo;
  }
}
