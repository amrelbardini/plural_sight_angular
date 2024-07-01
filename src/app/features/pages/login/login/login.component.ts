import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.buildForm();

  }


  buildForm():void{
    this.loginForm=this.fb.group({
     username:['',Validators.required],
     password:['',Validators.required],
     admin:['',Validators.required]
    })

  }
  loginForm!:FormGroup;

  login(){
    if(this.loginForm.valid){

      this.auth.username=this.loginForm.value.username;
      this.auth.userRole=this.loginForm.value.admin ? 'admin' : 'non-admin' ;

     setTimeout(()=>{
      this.router.navigate(['/products']);
     },500)

    }else{
      alert("Form is not valid!")
    }


  }

}
