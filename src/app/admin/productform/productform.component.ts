import { Component } from '@angular/core';
import { products } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent {

  
product:products;

  constructor(private productService:ProductService) {
    this.product= new products();
  }

  onSubmit(form: any): any {
  

    console.log(form)
      console.log(this.product)
      this.productService.addProduct(this.product).subscribe((data) => {
        console.log(data)
      })

}
}
