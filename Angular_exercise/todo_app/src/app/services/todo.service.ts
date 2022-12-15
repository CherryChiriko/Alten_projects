
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
    providedIn: 'root'
  })
  export class TodoService {
    
    constructor(private http: HttpClient) { }

    private url: string = "http://localhost:3000/todo"
    
    public getAll(): Observable<ITodo[]> { 
      return this.http.get<ITodo[]>(this.url);
    }  

    public getOne(id: number): Observable<ITodo[] | null>{ 
      return this.http.get<ITodo[]>(`${this.url}/${id}`)
      .pipe(
        map(tasks => {
          let task: ITodo[] = tasks.filter((todo: ITodo) => todo.id === id);
          return (task && task.length) ? task : null;
        })
      )
    }

    public createOne(label : string) : Observable<ITodo[]>{
      return this.http.post<ITodo[]>(this.url, {label});
    }
    
    public deleteOne(id: number): Observable<ITodo[]>{
      return this.http.delete<ITodo[]>(`${this.url}/${id}`);
    }

    // private handleError(error: any) : void {
    //   console.error('server error:', error);
    // }
  }


    // private taskArr: ITodo[] = [{id:0, label:"Wake Up"}, {id:1, label:"Work"}, {id:2, label:"Sleep"}, {id:3, label:"Repeat"}];
    // private idCounter: number = this.taskArr.length-1;
    
    // public getAll(): ITodo[] { return this.taskArr;}  
    // public getOne(id: number): ITodo | null{ 
    //     return (id> this.idCounter || id<0) ? null: this.taskArr[id];
    // }
    // public createOne(label : string): ITodo {
    //     this.idCounter+= 1;
    //     let newTask: ITodo = {id: this.idCounter, label: label};
    //     this.taskArr.push(newTask);
    //     return newTask;
    // }
    // public deleteOne(id: number): void{
    //     if (id <= this.idCounter && id>=0) {
    //         for (let i=id; i<this.idCounter; i++){
    //             this.taskArr[i].id -=1;
    //         }
    //         this.idCounter -= 1;
    //         this.taskArr.splice(id, 1);}
    // }
