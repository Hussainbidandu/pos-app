import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products:any
constructor(private productService:ProductService,private router: Router, ){}

  ngOnInit(): void {
    this.productService.viewProducts().subscribe((data)=>{
      this.products=data;
      console.log(this.products);
    })
  }

  //delete products

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl("/first", { skipLocationChange: true }).then(() => {
        this.router.navigate(['product'])
      })
    })
  }
  //edit product
  editProduct(id: any) {
  
    this.router.navigate(['admin/edit/' +id])
  }

}
  



