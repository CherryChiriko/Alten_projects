import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ITodo } from 'src/app/interfaces/todo.interface';
import { map, Observable } from 'rxjs';
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

    // *** This works, params *** //
    this.id$ = this.router.params.pipe(map(x => x['id']))
    this.id$.subscribe(x => this.id = x)
    this.service.getOne(this.id).subscribe(val => this.info = (val));

    // *** This works, snapshot *** //
    // this.id = this.router.snapshot.params['id'];
    // this.service.getOne(this.id).subscribe(val => this.info = (val));

  }

}
