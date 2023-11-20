import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addEmployees } from '../models/addEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {
  url : string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
//adding employee details
addEmployee(addEmployee:addEmployees){
  const httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  } 
  return this.http.post(this.url+'/addEmployees',addEmployee,httpOptions)
}

//view employee details
viewAddEmployees():Observable<any>{
  return this.http.get(this.url+'/addEmployees',{responseType:'json'})
}
 //delete emplyee
 deleteaddEmployee(id:any):Observable<any>{
  return this.http.delete(this.url+'/addEmployees/'+id,{responseType:'json'})
 }

 //get employee details by id for edit purpose
 getAddEmployeebyId(id:any):Observable<any>{
  return this.http.get(this.url+'/addEmployees/'+id,{responseType:'json'})
 }

 //update employee for edit purpose
 updateAddEmployee(addEmployee:addEmployees):Observable<any>{
  const httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  console.log(addEmployee);
  return this.http.put(this.url+'/addEmployees/'+addEmployee.id,addEmployee,httpOptions)
 }


}
