import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ITodo } from 'src/app/interfaces/todo.interface';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: []
})
export class TodoInfoComponent implements OnInit{
    id!: number;
    id$ !: Observable<number>;
    info !: any; 
    
  constructor( 
    private service : TodoService,
    private router: ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    
    
    // this.service.getOne(this.id).subscribe(val => this.info = (val));

  }

}
