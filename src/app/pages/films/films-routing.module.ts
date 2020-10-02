import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmCharactersComponent } from './components/film-characters/film-characters.component';
import { FilmsContainerComponent } from './films-container.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsContainerComponent
  },
  {
    path: ':title',
    component: FilmCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
