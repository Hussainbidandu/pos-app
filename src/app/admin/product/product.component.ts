import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import{ProductService} from '../../services/product.service'

//aaded models
// Import the Product class from the models folder
// import { products } from '../../models/product';

// Your component code

@Component({   
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  title:any;
  products:any;
  constructor(private productService:ProductService,
    private router:Router,private activatedRoute:ActivatedRoute){}


    ngOnInit(): void {
      this.title="welcome to event component"
       this.productService.viewProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products)
     })
    //  this.products=this.activatedRoute.snapshot.data['usersData']
    //  console.log(this.products)
    }
    
    // Deleete products
  deleteProduct(id : any) {
    // alert(id)
    this.productService.deleteProduct(id).subscribe((data) =>{
      console.log(data)
      this.router.navigateByUrl("/first", { skipLocationChange: true }).then(() => {
        this.router.navigate(['product'])
      })
    })
  } 
  editProduct(id: any) {
    // alert(id)
    this.router.navigate(['employee/' +id])
  }

}
