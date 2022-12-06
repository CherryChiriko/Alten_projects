import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  task: string[] = [];
    
  constructor() {}
    
  ngOnInit() {
      this.task = ['Veni','Vidi','Vici'];
  }
}
