import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/Login/login.service';
import { ILogin } from 'src/app/ViewModels/iLogin';
import { ISignUp } from 'src/app/ViewModels/iSignUp';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerform: FormGroup = {} as FormGroup;
  registerModel:ISignUp={} as ISignUp;
  authModel:ILogin={} as ILogin;
  Message:string="";
  public isLogged:boolean=false;
  constructor(private fb: FormBuilder,private registerService:LoginService) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(".{6,}")]],
  
  });
  
}


  onSubmit()
  {
    //alert("jjj");
    console.log(this.registerform.controls["firstName"].value);
    console.log(this.registerform.controls["lastName"].value);
    console.log(this.registerform.controls["email"].value);
    console.log(this.registerform.controls["password"].value);

    this.registerModel.firstName=this.registerform.controls["firstName"].value;
    this.registerModel.lastName=this.registerform.controls["lastName"].value;
    this.registerModel.email=this.registerform.controls["email"].value;
    this.registerModel.password=this.registerform.controls["password"].value;   
    this.registerService.userregister( this.registerModel).subscribe(   
     res=>{
       localStorage.setItem("token",res.data);
    console.log(this.Message)}
    );
     }
  }


