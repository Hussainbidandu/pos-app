import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url : string = 'http://localhost:3000'

  //In constructor will create on variable for using Http Client

  constructor(private http: HttpClient) { }

    //adding product
  addproduct(product:products) : Observable<any>{
    const httpOptions={
      headers : new HttpHeaders({'content-type':'application/json'})
    }
    
      return this.http.post(this.url+'/products',product,httpOptions)
    

    
  }
// view products
  viewProducts(): Observable<any>{
    return this.http.get(this.url+ '/products', {responseType: 'json'})
  }
 

  // Delete product
  deleteProduct(id : any) : Observable<any> {
    return this.http.delete(this.url + '/products/' +id, {responseType: 'json'})
  }

  // Get product by ID 
  getProductbyId(id : any ) : Observable<any> {
    return this.http.get(this.url + '/products/' +id, {responseType : 'json'})
  }

  // Update product 
  updateProduct(product:products) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(product);
    return this.http.put(this.url + '/products/' + product.id,products,httpOptions)
  }
 


 
 
}
