import { FormService } from 'src/app/services/form.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private routeSub !: Subscription;
  public profile ?: IUser;

  constructor(private route: ActivatedRoute, private form: FormService){}
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.form.getUserInfo(id).subscribe(user =>
        this.profile = user);
    });
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
  // id = this.route.snapshot.params['id'];
  // this.form.getUserInfo(id).subscribe(
  //   val => this.profile = (val));
}
