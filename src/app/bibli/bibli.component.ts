import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-bibli',
  templateUrl: './bibli.component.html',
  styleUrls: ['./bibli.component.scss']
})
export class BibliComponent implements OnInit {

  @Input() filmName!: string;
  @Input() filmYear!: number;
  @Input() filmGenre!: string;
  @Input() filmAvailable!: string;
  @Input() indexOfFilm!: number;
  @Input() filmActor!: string;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  getGenre(){
    return this.filmGenre;
  }

  getColor(){
    if(this.filmGenre === "Western"){
      return'orange'
    }
    if(this.filmGenre === "Classic"){
      return'blue'
    }
    if(this.filmGenre === "Musical"){
      return'green'
    }
    if(this.filmGenre === "Funny"){
      return'red'
    }
    if(this.filmGenre === "B&W"){
      return'black'
    }
    if(this.filmGenre === "Comedy"){
      return'HotPink'
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
