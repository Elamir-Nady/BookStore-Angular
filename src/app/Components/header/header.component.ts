import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book/book.service';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }
  isLoged:boolean=false;
  ngOnInit(): void {
    this.loginService.loginStatusSubject().subscribe({
      next:(islog=>{
        this.isLoged=islog;
      })
    })
  }

  Logout(){
    this.loginService.Logout();
  }
  search(text:any){
    text=text as ElementRef;
    let txt=text.value;
    if( text.value!=""){
    text.value="";
    this.router.navigate(['/search/',txt]);
  }
  }
}
