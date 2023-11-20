import { Component, OnInit, } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

})
export class UsersComponent implements OnInit{

  users:any;
constructor(private userService:UserService,private router: Router, ){}

  ngOnInit(): void {
    this.userService.viewUsers().subscribe((data)=>{
      this.users=data;
      console.log(this.users);
    })
  }


}
