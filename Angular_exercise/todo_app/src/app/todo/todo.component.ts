import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: []
})
export class TodoComponent implements OnInit{
  parentArr : string[] = [];
  constructor(){}
  ngOnInit(): void {
    
  }

  deleteTask(value: number){
    this.parentArr.splice(value,1);
  }

  addTask(value: string){
    this.parentArr = [value, ...this.parentArr];
  }
  
}
