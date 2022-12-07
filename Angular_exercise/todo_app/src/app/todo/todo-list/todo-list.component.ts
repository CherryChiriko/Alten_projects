import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  @Input() arr: string[] = [];
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
