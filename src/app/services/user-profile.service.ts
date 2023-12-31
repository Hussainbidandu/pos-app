import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usersProfiles } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  url : string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

   //ading users details
 addUsers(userProf:usersProfiles){
  const httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  }
  return this.http.post(this.url+'/usersProfiles',userProf,httpOptions)
 }

  //view all users
  viewUserList():Observable<any>{
    return this.http.get(this.url+'/usersProfiles',{responseType:'json'})
   }
}
