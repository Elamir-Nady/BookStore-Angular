import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from 'src/app/Services/Login/login.service';
import { ILogin } from 'src/app/ViewModels/iLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = {} as FormGroup;
  loginModel:ILogin={}as ILogin;
  Message:string="";
  error:boolean=false;
  public isLogged:boolean=false;
  constructor(private fb: FormBuilder,private loginService:LoginService,private router:Router) { 

  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(".{6,}")]]
    
  });
  
}

  onSubmit()
  {
    //alert("jjj");
    console.log(this.loginform.controls["email"].value);
    console.log(this.loginform.controls["password"].value);

   
    this.loginModel.email=this.loginform.controls["email"].value;
    this.loginModel.password=this.loginform.controls["password"].value;
   
    this.loginService.login(this.loginModel).subscribe(res=>{

      if(res.iSuccessed==false){
        this.Message=res.data;
        this.error=true;
      }
     
    })
    
    
  
  }


}

