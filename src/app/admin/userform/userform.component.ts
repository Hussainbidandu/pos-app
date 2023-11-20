import { Component } from '@angular/core';
import { users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {
  
  user:users;

  constructor(private userService:UserService) {
    this.user= new users();
  }

  onSubmit(form: any): any {
  

    console.log(form)
      console.log(this.user)
      this.userService.addUser(this.user).subscribe((data) => {
        console.log(data)
      })

}
}
