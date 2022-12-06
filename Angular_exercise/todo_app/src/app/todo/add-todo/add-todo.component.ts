import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  @Input() taskName: string = '';
  
  ngOnInit(): void {
    
  }
  addTask(){
    console.log("New task")
  }
}
