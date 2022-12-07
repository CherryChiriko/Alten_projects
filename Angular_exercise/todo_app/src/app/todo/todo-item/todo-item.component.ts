import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  isTodo: boolean = true;
  @Output() newEvent = new EventEmitter<number>();
  constructor() {}
    
  ngOnInit() {}

  // updateState(){
  //   this.newEvent.emit(this.isTodo);
  // }
}
