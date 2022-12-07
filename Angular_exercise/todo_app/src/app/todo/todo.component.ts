import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  parentArr : string[] = [];
  constructor(){}
  ngOnInit(): void {
    this.parentArr =  ["Hey", "I'm", "an array"];
  }

  deleteTask(value: number){
    let newArr = [...this.parentArr];
    newArr.splice(value,1);
    console.log(newArr);
;  }
}
