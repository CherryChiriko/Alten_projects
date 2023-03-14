import { FormService } from 'src/app/services/form.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/interfaces';
import { Address } from 'src/app/models/address.model';

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
      const id = Number(params['id']);
      this.form.getUserInfo(id).subscribe(user =>
        this.profile = user);
    });
  }

  private addressConvert(): Address{
    return this.profile?.address?
    { state: this.profile?.address?.state,
      city: this.profile?.address?.city,
      street: this.profile?.address?.street,
      num: this.profile?.address?.num}
    : {state:'', city: '', street: '', num: 0}
  }
  public displayAddress(): string{
    const address = this.addressConvert();
    if (address.num === 0 ){return ''}
    let arr: string [] = [];
    Object.values(address).forEach((val: string | number) => arr.push(val.toString()));
    return arr.join(', ');
  }
  ngOnDestroy(): void{
    this.routeSub.unsubscribe();
  }
}
