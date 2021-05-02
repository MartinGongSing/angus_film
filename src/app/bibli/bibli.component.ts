import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-bibli',
  templateUrl: './bibli.component.html',
  styleUrls: ['./bibli.component.scss']
})
export class BibliComponent implements OnInit {

  @Input() filmName!: string;
  @Input() filmGenre!: string;
  @Input() filmAvailable!: string;
  @Input() indexOfFilm!: number;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  getGenre(){
    return this.filmGenre;
  }

  getColor(){
    if(this.filmGenre === "Comedy"){
      return'orange'
    }
    if(this.filmGenre === "Animation"){
      return'blue'
    }
    if(this.filmGenre === "Fantasy"){
      return'green'
    }
    else {
      return'purple'
    }
  }

  onTakeOne(){
    this.filmService.takeOne(this.indexOfFilm);
  }
  onBringOne(){
    this.filmService.bringOne(this.indexOfFilm);
  }

}
