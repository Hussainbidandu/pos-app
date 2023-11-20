import { Component } from '@angular/core';
import { users } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.scss']
})
export class EditviewComponent {

  user:users;
  constructor(private activatedRoute: ActivatedRoute, private productService:UserService) {
    this.user=new users();
}
ngOnInit(): void {
  let id=this.activatedRoute.snapshot.params['id'];
  this.productService.getuserbyId(id).subscribe((data)=>{
    console.log(data);
    this.user=data;
  })
}
updateuser(form : any) {
  console.log(this.user)
  this.productService.updateUser(this.user).subscribe((data) => {
    console.log(data, "Updated ")
  })
}

}
