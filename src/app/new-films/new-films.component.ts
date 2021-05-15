import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-films',
  templateUrl: './new-films.component.html',
  styleUrls: ['./new-films.component.scss']
})
export class NewFilmsComponent implements OnInit {
  
  constructor(private http:HttpClient) { }


  onSubmit(film:any){

    // this.http.post("http://localhost:8000/api/new/film",film)
    // .subscribe((result)=>{
    //   console.warn("result", result)

    // })
    console.warn(film)

  }
  

  ngOnInit(): void {
  }

}
