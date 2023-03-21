import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private routeSub !: Subscription;
  public profile = new User();

  constructor(private route: ActivatedRoute, private loginService: LoginService){}
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.loginService.getUserInfo(id).subscribe(user =>
        this.profile?.mapFromDTO(user));
    });
  }

  public displayAddress(): string{
    const address : Address = this.profile.address ?
    this.profile.address : new Address();
    if (!address.city){return ''}
    let arr: string [] = [];
    Object.values(address).forEach((val: string | number) => arr.push(val.toString()));
    return arr.join(', ');
  }

  ngOnDestroy(): void{
    this.routeSub.unsubscribe();
  }
}
