import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/Services/Author/author.service';
import { BookService } from 'src/app/Services/book/book.service';
import { IAuthor } from 'src/app/ViewModels/iAuthor';
import { IBook } from 'src/app/ViewModels/iBook';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-detiles',
  templateUrl: './book-detiles.component.html',
  styleUrls: ['./book-detiles.component.scss']
})
export class BookDetilesComponent implements OnInit {
  imagApi:string=environment.imgApi;

  book!:IBook;
  author!:IAuthor;
  bookid!:number;
  constructor(private bookservice:BookService,
              private authorService:AuthorService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private location:Location) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.bookid= Number(param.get('bid'));
      this.bookservice.getBook(this.bookid).subscribe(res=>{
        this.book=res.data;
        this.authorService.getAuther(this.book.autherID).subscribe(res=>{
          this.author=res.data;
        })
        });
    });
  }
  delete(){
    this.bookservice.deletebook(this.bookid).subscribe(
      res=>{
        this.router.navigate(['/books']);
      }
    );
  }

  goback(){
    this.location.back();
  }
}
