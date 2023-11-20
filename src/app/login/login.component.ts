import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


   protected formSubmitted:boolean=false;
  
   loginForm: FormGroup;
   constructor(private formBuilder: FormBuilder, private router: Router,private employeeSerVice:EmployeeService) {
      this.loginForm = this.formBuilder.group({
        userid: ['', Validators.required],
        password: ['', Validators.required],
      });
    }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  loginUser() {
    const data : any = {
      userId : this.loginForm.controls['userId'].value,
      password : this.loginForm.controls['password'].value
    }
    // console.log(data)
    this.employeeSerVice.getEmployeeinfo(data.userId, data.password).subscribe((data) => {
      // console.log(data)
      let employee = data[0];
      console.log(employee)
      sessionStorage.setItem('role', employee.role)
      sessionStorage.setItem('name', employee.name)
      sessionStorage.setItem('isLoggedIn', 'true')
      if(employee.role === 'admin') {
        this.router.navigate(['second'])
      } else if (employee.role === 'branchmanager' || employee.role === 'branchemployee') {
        this.router.navigate(['first'])
      }
    })
  }


  }

  
   

