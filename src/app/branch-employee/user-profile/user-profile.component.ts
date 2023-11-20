import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { usersProfiles} from 'src/app/models/userProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userProf:usersProfiles;

}
