import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/ViewModels/iAuthor';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
 
allAuthers():Observable<ResultViewModel>{

 const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.get<ResultViewModel>(`${environment.Api}Auther`,{headers:headerss})

}
getAuther(id:number):Observable<ResultViewModel>{

  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
     'Content-Type': 'application/json',
   });  
   return this.http.get<ResultViewModel>(`${environment.Api}Auther/${id}`,{headers:headerss})
 
 }

addAuther(author:IAuthor):Observable<ResultViewModel>{
  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.post<ResultViewModel>(`${environment.Api}Auther`,JSON.stringify(author),{headers:headerss})
}
deleteAuther(authorid:number):Observable<ResultViewModel>{
  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.delete<ResultViewModel>(`${environment.Api}Auther/${authorid}`,{headers:headerss})
}
updateAuther(author:IAuthor):Observable<ResultViewModel>{
  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.put<ResultViewModel>(`${environment.Api}Auther`,JSON.stringify(author),{headers:headerss})
}
}