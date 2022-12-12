
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
    providedIn: 'root'
  })
  export class TodoService {
  
    constructor() { }

    private taskArr: ITodo[] = [{id:0, label:"Wake Up"}, {id:1, label:"Work"}, {id:2, label:"Sleep"}, {id:3, label:"Repeat"}];
    private idCounter: number = this.taskArr.length-1;
    
    public getAll(): ITodo[] { return this.taskArr;}  
    public getOne(id: number): ITodo | null{ 
        return (id> this.idCounter || id<0) ? null: this.taskArr[id];
    }
    public createOne(label : string): ITodo {
        this.idCounter+= 1;
        let newTask: ITodo = {id: this.idCounter, label: label};
        this.taskArr.push(newTask);
        return newTask;
    }
    public deleteOne(id: number): void{
        if (id <= this.idCounter && id>=0) {
            for (let i=id; i<this.idCounter; i++){
                this.taskArr[i].id -=1;
            }
            this.idCounter -= 1;
            this.taskArr.splice(id, 1);}
    }
  }




