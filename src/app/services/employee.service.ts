import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employees } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient) { }

//adding Employee
addEmployee(employee:employees):Observable<any>{
  const httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  }
  console.log(employee)
  return this.http.post(this.url+'/employees',employee,httpOptions)
}

//get user id and 
getEmployeeinfo(id:any,password:any):Observable<any>{
  return this.http.get(this.url+'/employees',{params:{userId:id,password:password},responseType:'json'})
}
}
