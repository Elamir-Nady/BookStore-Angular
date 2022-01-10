import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My-Project';
  product:string="Interpolation";
  image:string="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  
  textValue:string="Banana";

  arrayNum = [1, 2, 6, 8, 9, 7];
}
