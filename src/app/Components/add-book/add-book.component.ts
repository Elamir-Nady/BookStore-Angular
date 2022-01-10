import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/Services/Author/author.service';
import { BookService } from 'src/app/Services/book/book.service';
import { UploadImgService } from 'src/app/Services/uploadImgInCloudinary/upload-img.service';
import { IAuthor } from 'src/app/ViewModels/iAuthor';
import { IBook } from 'src/app/ViewModels/iBook';
import { IBookWithFile } from 'src/app/ViewModels/iBookWithFile';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  book!: IBook;
  Authores: IAuthor[] = [];
  file!: File;
  files: File[]=[];


  uploadForm!:FormGroup;

  constructor(private authorService: AuthorService,
    private uploadService: UploadImgService,
    private bookService: BookService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location:Location) {

    this.book = {
      id: 0,
      title: "",
      imageURL: "",
      autherID: 0,
      descryption: ""
    }
  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
   });
    this.authorService.allAuthers().subscribe(res => {
      this.Authores = res.data;
    })
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  onUploade() {
    const file = this.file;
        if(file!=null){
          this.bookService.addImage(this.file).subscribe(res=>{
            this.book.imageURL=res.data;
            this.bookService.addbook(this.book).subscribe(res=>{
              this.router.navigate(['/books']);
            })
          }
            ) 
        }
}
goback(){
  this.location.back();
}

}
