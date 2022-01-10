import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  constructor(private _http:HttpClient) { }

  uploadImage(val:any) :Observable<any>
  {
    
      let data = val;
      return this._http.post(
        'https://api.cloudinary.com/v1_1/dip0jaznz/image/upload',data
      );
  }
}
