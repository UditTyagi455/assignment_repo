import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 @Injectable({
  providedIn: 'root'
})
export class SerService {
  public title:any ;
  public offset:number =0;
  public page:number =10;
  public key ="Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY";
  public url:any = '';
  public url2:any =``;
  constructor(private http: HttpClient) { }


  getData(page:number,offset:number):any {
    this.url =`https://api.giphy.com/v1/gifs/trending?api_key=${this.key}&limit=${page}&offset=${offset}`;
    return this.http.get(this.url)
  }
  searchApiData(title: string,offset:number){
    this.url2 = `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY&limit=${this.page}&offset=${offset}`;
     return this.http.get(this.url2)
  }
  
}
