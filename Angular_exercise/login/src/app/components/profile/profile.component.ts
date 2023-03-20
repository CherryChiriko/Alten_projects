import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IAddress, IUser } from 'src/app/interfaces/interfaces';
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
    const address = this.profile.address ?
    this.profile.address :
    {state:'', city: '', street: '', num: 0};
    if (!address.num){return ''}
    let arr: string [] = [];
    Object.values(address).forEach((val: string | number) => arr.push(val.toString()));
    return arr.join(', ');
  }
  ngOnDestroy(): void{
    this.routeSub.unsubscribe();
  }
}
