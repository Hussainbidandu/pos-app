import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contacts } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url : string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
//adding contact
addContact(contact:contacts):Observable<any>{
  const httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  }
  console.log(contact)
  return this.http.post(this.url+'/contacts',contact,httpOptions)
}

 //view all conatcs
 viewContacts():Observable<any>{
  return this.http.get(this.url+'/contacts',{responseType:'json'})
 }

  
}
