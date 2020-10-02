import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsContainerComponent } from './films-container.component';
import { FilmCharactersComponent } from './components/film-characters/film-characters.component';
import { CharactersContainerComponent } from '../characters/characters-container.component';


@NgModule({
  declarations: [
    FilmsContainerComponent,
    FilmCharactersComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
