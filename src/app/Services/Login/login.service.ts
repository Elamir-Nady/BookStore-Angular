import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILogin } from 'src/app/ViewModels/iLogin';
import { ISignUp } from 'src/app/ViewModels/iSignUp';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoginSubject: BehaviorSubject<boolean>;
  userToken: BehaviorSubject<string>
  constructor(private http: HttpClient,
    private router: Router) {
    this.isLoginSubject = new BehaviorSubject<boolean>(false);
  
    this.userToken = new BehaviorSubject<string>("");

  }
  
  userregister(user: ISignUp): Observable<ResultViewModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<ResultViewModel>(`${environment.Api}User/SignUp`, JSON.stringify(user), httpOptions)

  }
  login(loginModel: ILogin): Observable<ResultViewModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    this.http
      .post<ResultViewModel>(`${environment.Api}user/login`, JSON.stringify(loginModel), httpOptions)
      .subscribe({
        next: (res) => {
          if (res.iSuccessed == true) {
            localStorage.setItem("token", res.data);
            this.isLoginSubject.next(true);
            this.router.navigate(['/books']);
          }
          else {
            this.isLoginSubject.next(false);

          }
          console.log(res.data);
        }
      })

    console.log(loginModel);
    return this.http
      .post<ResultViewModel>(`${environment.Api}user/login`, JSON.stringify(loginModel), httpOptions);
  }
  Logout() {
    localStorage.removeItem("token"); 
    this.isLoginSubject.next(false);
    this.router.navigate(['/login']);
  }

  loginStatusSubject(): Observable<boolean> {
    // localStorage.removeItem("token");

    return this.isLoginSubject;

  }
  LoginStatus():boolean{
    if(localStorage.getItem("token")){
      
      return true
    }
    else
    {
      return false;
    }

  }
}


