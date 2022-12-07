import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  ngOnInit(): void {}

  @Input() taskName: string = '';
  @Output() newEvent = new EventEmitter<string>();

  taskContent : string = '';
  
  addTaskContent(event: any){
    this.taskContent = event.target.value;
  }
  addTaskChild(){
    this.newEvent.emit(this.taskContent);
  }
  
}
