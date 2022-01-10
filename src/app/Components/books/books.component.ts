import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthorService } from 'src/app/Services/Author/author.service';
import { BookService } from 'src/app/Services/book/book.service';
import { IAuthor } from 'src/app/ViewModels/iAuthor';
import { IBook } from 'src/app/ViewModels/iBook';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  imagApi:string=environment.imgApi;
books:IBook[]=[];
Authers:IAuthor[]=[];
Auther!:IAuthor;
isEmpty:boolean=false;
@ViewChild('Selectitem') Selectitem!:ElementRef;

  constructor(private book:BookService,
              private author:AuthorService,
              private router:Router) 
  { }
 

  ngOnInit(): void {
    this.book.allBooks().subscribe(res=>{
      this.books=res.data;
    })
    this.author.allAuthers().subscribe(res=>{
      this.Authers=res.data;
    })
  }
  AutherId(id:any){
    
    id=id as number;
   switch(id){
     case '0' :
      this.book.allBooks().subscribe(res=>{
        this.books=res.data;
        if(this.books.length==0){
          this.isEmpty=true;
        }
      });
      break;
     default:
      this.book.allBooksByAuthorId(id).subscribe(res=>{
        this.books=res.data;
        if(this.books.length==0){
          this.isEmpty=true;
        }
      }) 
       break;
   }
   
    
  }
  display(id:number){
    this.router.navigate(["/book/",id]);
  }
  delete(id:number){
    this.book.deletebook(id).subscribe(res=>{
      this.ngOnInit();
    });
  }
  addBook(){
    this.router.navigate(["/addbook"]);

  }
 updateBook(id:number){
    this.router.navigate(["/Updatebook",id]);

  }
}
