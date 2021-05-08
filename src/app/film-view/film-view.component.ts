import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss']
})
export class FilmViewComponent implements OnInit {
  isAuth = false;
  films?: any[];

  // GET DATAS FROM users.service.ts
  dataTest:any=[]
  
  constructor(private filmService: FilmService){
    setTimeout(
      () => {
        this.isAuth=true;
      }, 2000
  );

  this.filmService.getFilms().subscribe(film=>{
    // console.warn(film);
    this.dataTest=film;
    
  })


  }

  ngOnInit(){
    this.films = this.filmService.films;
  }

  onAllumer(){
    console.log("Button pressed")
  }


}



