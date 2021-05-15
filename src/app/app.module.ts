import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliComponent } from './bibli/bibli.component';

import {FilmService} from './service/film.service';
import { FilmViewComponent } from './film-view/film-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ThemaViewComponent } from './thema-view/thema-view.component';
import { PaletteComponent } from './palette/palette.component';
import { NewFilmsComponent } from './new-films/new-films.component';



const appRoutes: Routes =[
  {path: 'films', component:FilmViewComponent},
  {path: 'themas', component: ThemaViewComponent},
  {path: 'newFilms', component: NewFilmsComponent},
  {path:'', component: FilmViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BibliComponent,
    FilmViewComponent,
    ThemaViewComponent,
    PaletteComponent,
    NewFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
