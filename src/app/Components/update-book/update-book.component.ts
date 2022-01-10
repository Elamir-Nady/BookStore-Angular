import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/Services/Author/author.service';
import { BookService } from 'src/app/Services/book/book.service';
import { UploadImgService } from 'src/app/Services/uploadImgInCloudinary/upload-img.service';
import { IAuthor } from 'src/app/ViewModels/iAuthor';
import { IBook } from 'src/app/ViewModels/iBook';
import { IBookWithFile } from 'src/app/ViewModels/iBookWithFile';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  book!: IBook;
  Authores: IAuthor[] = [];
  file!: File;
  files: File[]=[];
  bookId!:number;



  constructor(private authorService: AuthorService,
    private uploadService: UploadImgService,
    private bookService: BookService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private location:Location) {

  
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.bookId= Number(param.get('bid'));
      this.bookService.getBook(this.bookId).subscribe(res=>{
        this.book=res.data;
        this.authorService.allAuthers().subscribe(res => {
          this.Authores = res.data;
        })
        });
    });
   
  }

  // onFileSelected(event: any) {
  //   this.file = event.target.files[0];
    
  // }
  Update() {
          this.bookService.updatebook(this.book).subscribe(res=>{
            this.router.navigate(['/book/',this.book.id]);
          })


}

goback(){
  this.location.back();
}

}
