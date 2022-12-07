import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  parentArr : string[] = [];
  constructor(){}
  ngOnInit(): void {
    this.parentArr =  ["Work", "Live", "Enjoy"];
  }

  deleteTask(value: number){
    this.parentArr.splice(value,1);
  }

  addTask(value: string){
    this.parentArr = [value, ...this.parentArr];
  }
  
}
