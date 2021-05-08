import { Component, OnInit } from '@angular/core';
import { ThemaService } from '../service/thema.service';

@Component({
  selector: 'app-thema-view',
  templateUrl: './thema-view.component.html',
  styleUrls: ['./thema-view.component.scss']
})
export class ThemaViewComponent implements OnInit {

  isAuth = false;
  themas?: any[];
  dataThema:any=[];

  constructor(private themaService: ThemaService){
    setTimeout(
      () => {
        this.isAuth=true;
      }, 2000
  );
  this.themaService.getThemas().subscribe(thema=>{
    console.warn(thema);
    this.dataThema=thema;
    
  })
}


  ngOnInit(){
    this.themas = this.themaService.themas;
  }

}
