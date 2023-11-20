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

  
}
