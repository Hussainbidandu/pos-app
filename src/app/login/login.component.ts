import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  protected formSubmitted : boolean = false;


  constructor(private employeeService: EmployeeService,
    private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })


  }

}

