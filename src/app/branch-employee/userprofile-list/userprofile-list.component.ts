import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-userprofile-list',
  templateUrl: './userprofile-list.component.html',
  styleUrls: ['./userprofile-list.component.scss']
})
export class UserprofileListComponent implements OnInit{

  usersProfiles:any;
  constructor(private userService:UserProfileService,private router: Router, ){}
  
    ngOnInit(): void {
      this.userService.viewUserList().subscribe((data)=>{
        this.usersProfiles=data;
        console.log(this.usersProfiles);
      })
    }

      //edit user details
  // editUser(id:any){
  //   this.router.navigate(['branch-employee/edit/'+id])
  // }

}
