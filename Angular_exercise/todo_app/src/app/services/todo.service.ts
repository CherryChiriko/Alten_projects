
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, BehaviorSubject, tap, find } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
    providedIn: 'root'
  })
  export class TodoService {
    
    constructor(private http: HttpClient) { 
      this.http.get<ITodo[]>(this.url).subscribe(
      todos => this.refresh(todos)
      )
    }

    private url: string = "http://localhost:3000/todo";
    
    private subject$ = new BehaviorSubject<ITodo[]>([]);   
    private refresh(todos: ITodo[]){ return this.subject$.next(todos);  }

    public getAll(): Observable<ITodo[]> { 
      return this.http.get<ITodo[]>(this.url);
    }  

    public createOne(label : string) : Observable<ITodo[]>{
      return this.http.post<ITodo[]>(this.url, {label});
    }
  
    public deleteOne(id: number): Observable<ITodo[]>{
      return this.http.delete<ITodo[]>(`${this.url}/${id}`);
    }

    public getOne(id: number): Observable<ITodo[]>{
      return this.http.get<ITodo[]>(`${this.url}/${id}`);
    }
    

    // public getOne(id: number){
    //   const result = this.getAll().pipe(
    //     find(
    //       ev => {
    //         console.log(ev.filter(t => t.id === id)); 
    //         return ev[2].id === id}))
    //     // ev => (ev[].id === id)))
    //   result.subscribe(x => console.log('I am x ' +x));
    //   return result;
    // }


    // public getOne(id: number){
    //   const result = this.getAll().pipe(
    //     tap(
    //       ev => {
    //         console.log(ev.filter(t => t.id === id)); 
    //         return ev.find(t => t.id === 1)}))
    //     // ev => (ev[].id === id)))
    //   result.subscribe(x => console.log('I am x ' +x));
    //   return result;
    // }














    // public getAll(): Observable<ITodo[]> {
    //   return this.subject$;
    // }
  
    // public createOne(label : string) : Observable<ITodo[]>{
    //   return this.http.post<ITodo[]>(this.url, {label}).pipe(tap(
    //     res => {
    //       let r = this.http.get<ITodo[]>(this.url);
    //       console.log(r)
    //       this.subject$.next(res)}
    //   )
    // )}
    
    // public deleteOne(id: number): Observable<ITodo[]>{
    //   return this.http.delete<ITodo[]>(`${this.url}/${id}`).pipe(tap(
    //     this.http.get<ITodo[]>(this.url).subscribe(todos => this.refresh(todos))
    //   ));
    // }

    // public deleteOne(id: number): Observable<ITodo[]>{
    //   return this.http.delete<ITodo[]>(`${this.url}/${id}`).pipe(tap(
    //     this.http.get<ITodo[]>(this.url).subscribe(
    //       todos => this.refresh(todos)
    //       )
    //   ));
    // }

    // public getOne(id: number): Observable<ITodo[] | null>{ 
    // public getOne(id: number){
    //   this.http.get<ITodo[]>(this.url).pipe(map(
    //     tasks => {
    //       let task = tasks.filter( t => t.id === id);
    //       return (task && task.length) ? task : null;
    //       // console.log(tasks);
    //     }
    //   )
      
    



      // return this.http.get<ITodo[]>(`${this.url}/${id}`)
      // .pipe(
      //   map(tasks => {
      //     let task: ITodo[] = tasks.filter((todo: ITodo) => todo.id === id);
      //     return (task && task.length) ? task : null;
      //   })
      // )
    
  }

  // public getAll(): Observable<ITodo[]> { 
  //   return this.http.get<ITodo[]>(this.url);
  // }  

  // public getOne(id: number): Observable<ITodo[] | null>{ 
  //   return this.http.get<ITodo[]>(`${this.url}/${id}`)
  //   .pipe(
  //     map(tasks => {
  //       let task: ITodo[] = tasks.filter((todo: ITodo) => todo.id === id);
  //       return (task && task.length) ? task : null;
  //     })
  //   )
  // }

  // public createOne(label : string) : Observable<ITodo[]>{
  //   return this.http.post<ITodo[]>(this.url, {label});
  // }
  
  // public deleteOne(id: number): Observable<ITodo[]>{
  //   return this.http.delete<ITodo[]>(`${this.url}/${id}`);
  // }









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
