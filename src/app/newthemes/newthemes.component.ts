import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newthemes',
  templateUrl: './newthemes.component.html',
  styleUrls: ['./newthemes.component.scss']
})
export class NewthemesComponent implements OnInit {

  constructor(private http:HttpClient ) { }


  onSubmit(thema:any){

    this.http.post("http://localhost:8000/api/new/thema",thema)
    .subscribe((result)=>{
      console.warn("result", result)

    })
    console.warn(thema)

  }

  ngOnInit(): void {
  }

}
