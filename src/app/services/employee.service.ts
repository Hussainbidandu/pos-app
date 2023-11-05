import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient) { }


  // Get Details by User Id and Password
  getEmployeeInfo(userId: any, password: any): Observable<any> {
    return this.http.get(this.url + '/employee', { params: { userId: userId, password: password }, responseType: 'json' },)
  }
}
