import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { BooksComponent } from './Components/books/books.component';
import { BookDetilesComponent } from './Components/book-detiles/book-detiles.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { SearchComponent } from './Components/search/search.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorsComponent,
    BooksComponent,
    BookDetilesComponent,
    LoginComponent,
    AddBookComponent,
    UpdateBookComponent,
    SearchComponent,
    SignUpComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
