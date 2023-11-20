import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

   //ading users
 addUser(user:users){
  const httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  }
  return this.http.post(this.url+'/users',user,httpOptions)
 }
 //view all users
 viewUsers():Observable<any>{
  return this.http.get(this.url+'/users',{responseType:'json'})
 }

 //delete view users by r
 deleteViewUser(id:any):Observable<any>{
  return this.http.delete(this.url+'/users/'+id, {responseType:'json'})
 }

 
  // Get  view users by ID for edit 
  getuserbyId(id : any ) : Observable<any> {
    return this.http.get(this.url + '/users/' +id, {responseType : 'json'})
  }
    // Update view user for edit 
    updateUser(user:users) : Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
      }
      console.log(user);
      return this.http.put(this.url + '/users/' + user.id,user,httpOptions)
    }

    
  }
   
