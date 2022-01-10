import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/book/book.service';
import { IBook } from 'src/app/ViewModels/iBook';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  imagApi:string=environment.imgApi;

  books:IBook[]=[];
  constructor(private activatedRoute:ActivatedRoute,
              private bookService:BookService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      let txt= String(param.get('txt'));
      this.bookService.search(txt).subscribe(res=>{
        this.books=res.data;
     
        });
    });
  }
  display(id:number){
    this.router.navigate(["/book/",id]);
  }
  delete(id:number){
    this.bookService.deletebook(id).subscribe(res=>{
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
