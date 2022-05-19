import { Component,OnInit } from '@angular/core';
import { SerService } from './services/ser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  offset =0;
  public totalData: number =0;
  page:number =10;
  public arraydata:any =[]
  constructor(private apidata: SerService){}

  ngOnInit() {
    this.apidata.getData(this.page,this.offset).subscribe((value: any) =>{
      this.arraydata = value.data;
      this.totalData =value.pagination.total_count;
    })
  }

  back(){   
   if(this.offset !== 0){
     this.offset =this.offset -1;
   this.apidata.getData(this.page,this.offset).subscribe((value:any) =>{
     this.arraydata =value.data;
   })
  }
  }

  next() {
    if((this.totalData/this.page) >= this.offset){
    this.offset = this.offset +1;
    this.apidata.getData(this.page,this.offset).subscribe((value:any) =>{
      this.arraydata =value.data;
    })
  }
  }

  selectPage(){
    this.apidata.getData(this.page,this.offset).subscribe((value:any) =>{
        this.arraydata = value.data;
    })
  }

  onSubmit() {
       this.apidata.searchApiData(this.title,this.offset).subscribe((value:any) =>{
           this.arraydata =value.data ;
       });
      }
}
