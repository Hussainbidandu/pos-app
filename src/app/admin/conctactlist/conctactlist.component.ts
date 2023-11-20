import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-conctactlist',
  templateUrl: './conctactlist.component.html',
  styleUrls: ['./conctactlist.component.scss']
})
export class ConctactlistComponent {

  contacts:any;
  constructor(private productService:ContactService,private router: Router, ){}
  
    ngOnInit(): void {
      this.productService.viewContacts().subscribe((data)=>{
        this.contacts=data;
        console.log(this.contacts);
      })
    }
  

}
