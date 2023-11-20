import { Component } from '@angular/core';

import { usersProfiles} from 'src/app/models/userProfile';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userProf:usersProfiles;

    


constructor(private userService:UserProfileService) {
  this.userProf= new usersProfiles();
}

onSubmit(form: any): any {


  console.log(form)
    console.log(this.userProf)
    this.userService.addUsers(this.userProf).subscribe((data) => {
      console.log(data)
    })

}

}
