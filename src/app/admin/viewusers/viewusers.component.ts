import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent  implements OnInit{
  users: any;
  constructor(private userService : UserService,private router:Router) {
    console.log(this.users);
  }

  ngOnInit(): void {
      this.userService.viewUsers().subscribe((data) => {
        this.users = data;
        console.log(this.users)
        
      })
  }

  deleteView(id:any){
    this.userService.deleteViewUser(id).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl("/first", { skipLocationChange: true }).then(() => {
        this.router.navigate(['user'])
      })
    })
  }

    //edit product
  editView(id: any) {
  
    this.router.navigate(['admin/editview/' +id])
  }

}
