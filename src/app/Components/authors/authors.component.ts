import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorService } from 'src/app/Services/Author/author.service';
import { IAuthor } from 'src/app/ViewModels/iAuthor';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
authers:IAuthor[]=[];
autherdetiles:IAuthor={id:0};
addbtn:boolean=false;
updatebtn:boolean=false;
authstatusAdd:string="Add Author";
authstatusUpdate:string="Update";
nameIsNull:boolean=true;
  constructor(private author:AuthorService) { }


  ngOnInit(): void {
    this.author.allAuthers().subscribe(res=>{
      this.authers=res.data;
    })
  }
  changeAdd(){
    this.addbtn=!this.addbtn;
    if(this.addbtn==true){
      this.updatebtn=false;
      this.authstatusAdd="Cancel"
    }
    else{
      this.authstatusAdd="Add Author"
    }
  }
  isnull(name:string){
    if(name==""){
      this.nameIsNull=true;
    }
    else
    {
      this.nameIsNull=false;

    }
  }
  addAuther(authername:any){
    authername=authername as ElementRef
      this.autherdetiles.fullName=authername.value;
      authername.value="";
      if(this.autherdetiles.fullName!=""){

        this.author.addAuther(this.autherdetiles).subscribe(res=>{
          this.nameIsNull=true;
          this.ngOnInit();
        });
      }
      
    
  }
  remove(Auther:IAuthor){
    if(Auther!=null){
      this.author.deleteAuther(Auther.id).subscribe(res=>{
        this.ngOnInit();
      });
    }
    
  }
  toUpdate(auther:IAuthor,updateIput:any){
    this.autherdetiles=auther;
    if(this.updatebtn==false){
      this.updatebtn=true;
    }
    if(this.updatebtn==true){
      this.addbtn=false;
      this.authstatusAdd="Add Author"
      this.authstatusUpdate="Cancel"
      updateIput=updateIput as ElementRef
      updateIput.value=auther.fullName;
    }
    else{
      this.authstatusUpdate="Update"
    }

  }
  hideUpdate(){
    if(this.updatebtn==true){
      this.updatebtn=false;
    }
  }
  updateAuther(authername:any){
    authername=authername as ElementRef
      this.autherdetiles.fullName=authername.value;
      this.updatebtn=false;
      if(this.autherdetiles.fullName!=""){

        this.author.updateAuther(this.autherdetiles).subscribe(res=>{
          this.nameIsNull=true;
          this.ngOnInit();
        });
      }
    }
}
