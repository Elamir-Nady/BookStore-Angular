import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { BookDetilesComponent } from './Components/book-detiles/book-detiles.component';
import { BooksComponent } from './Components/books/books.component';
import { LoginComponent } from './Components/login/login.component';
import { SearchComponent } from './Components/search/search.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { UserAuthGuard } from './guards/AuthGuard/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo:"/books",pathMatch:"full" },  
  { path: 'login', component: LoginComponent },  
  { path: 'signUp', component: SignUpComponent},
  { path: 'books', component: BooksComponent,canActivate:[UserAuthGuard] },
  { path: 'book/:bid', component: BookDetilesComponent ,canActivate:[UserAuthGuard]},
  { path: 'authores', component: AuthorsComponent,canActivate:[UserAuthGuard] },
  { path: 'addbook', component: AddBookComponent,canActivate:[UserAuthGuard] },
  { path: 'Updatebook/:bid', component: UpdateBookComponent ,canActivate:[UserAuthGuard]},
  { path: 'search/:txt', component: SearchComponent,canActivate:[UserAuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
