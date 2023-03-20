import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/interfaces';
import { Result } from 'src/app/models/result.model';
// import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  @Input() result = new Result("", 500);
  @Input() user?: IUser;

  ngOnInit(): void {}
  constructor(){}

  ngOnChanges(): void {    this.display()  }

  private stringToDate(dateString: string): Date{
    return new Date(Date.parse(dateString.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')));
  }
  private calculateAge(birthday: Date) : number{
    const age = new Date().getFullYear() - birthday.getFullYear();
    console.log(birthday.getFullYear(), age)
    return age;
  }
  private daysForBirthday(birthday: Date) : number {
    const now = new Date(); const currentYear = now.getFullYear();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const birthdayThisYear = birthday.setFullYear(currentYear);
    const nextBirthday = birthdayThisYear > now.getTime() ?
     now.getTime() : now.setFullYear(currentYear + 1) ;

    return Math.ceil((birthdayThisYear - nextBirthday) / millisecondsPerDay);
  }

  public display(): string{
    // const birthday = this.user?.birthday? this.stringToDate(this.user.birthday) : new Date();
    // console.log(this.user)
    // const message = this.user?.userName? `Hello ${this.user?.userName}!\n
    // You will be ${this.calculateAge(birthday)} in ${this.daysForBirthday(birthday)} days!`: '';
    // return message;
    return '';
  }
}
