import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/ViewModels/iBook';
import { IBookWithFile } from 'src/app/ViewModels/iBookWithFile';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }



allBooks():Observable<ResultViewModel>{

 const headerss= new HttpHeaders({
  'Authorization':'Bearer '+localStorage.getItem("token"),
  'Content-Type': 'application/json',
  });  
  return this.http.get<ResultViewModel>(`${environment.Api}book`,{headers:headerss})

}

getBook(id:number):Observable<ResultViewModel>{

  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
     'Content-Type': 'application/json',
   });  
   return this.http.get<ResultViewModel>(`${environment.Api}book/${id}`,{headers:headerss})
 
 }
 

addbook(book:IBook):Observable<ResultViewModel>{
  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.post<ResultViewModel>(`${environment.Api}book`,JSON.stringify(book),{headers:headerss})
}
deletebook(bookid:number):Observable<ResultViewModel>{
  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.delete<ResultViewModel>(`${environment.Api}book/${bookid}`,{headers:headerss})
}
updatebook(book:IBook):Observable<ResultViewModel>{
  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.put<ResultViewModel>(`${environment.Api}book`,JSON.stringify(book),{headers:headerss})
}

allAuthers():Observable<ResultViewModel>{

  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
     'Content-Type': 'application/json',
   });  
   return this.http.get<ResultViewModel>(`${environment.Api}Auther`,{headers:headerss})
 
 }
 allBooksByAuthorId(id:number):Observable<ResultViewModel>{
  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
    'Content-Type': 'application/json',
  });  
  return this.http.get<ResultViewModel>(`${environment.Api}book/auther/${id}`,{headers:headerss})
 }


 addImage(model:File):Observable<ResultViewModel>{
  const formData: FormData = new FormData();
  formData.append('model', model);
  const headerss= new HttpHeaders({
    
    'Authorization':'Bearer '+localStorage.getItem("token"),
    // 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
    'enctype': 'multipart/form-data',
    'Accept': 'application/json'
  });  
  return this.http.post<ResultViewModel>(`${environment.Api}Book/addimage`,formData,{headers:headerss})
}

search(text:string):Observable<ResultViewModel>{

  const headerss= new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("token"),
     'Content-Type': 'application/json',
   });  
   return this.http.get<ResultViewModel>(`${environment.Api}book/search/${text}`,{headers:headerss})
 
 }

}
