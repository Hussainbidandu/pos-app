import { Component ,OnInit} from '@angular/core';
import { products } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-edit-p',
  templateUrl: './edit-p.component.html',
  styleUrls: ['./edit-p.component.scss']
})
export class EditPComponent implements OnInit {

product:products;
  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService) {
    this.product=new products();
}
ngOnInit(): void {
  let id=this.activatedRoute.snapshot.params['id'];
  this.productService.getProductbyId(id).subscribe((data)=>{
    console.log(data);
    this.product=data;
  })
}
updateProduct(form : any) {
  console.log(this.product)
  this.productService.updateProduct(this.product).subscribe((data) => {
    console.log(data, "Updated Product")
  })
}


}

