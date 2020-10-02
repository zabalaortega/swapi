import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/core/models/characters.interface';
import { Films } from 'src/app/core/models/films.interface';
import { FilmsService } from '../../../../core/services/films.service';

@Component({
  selector: 'app-film-characters',
  templateUrl: './film-characters.component.html',
  styleUrls: ['./film-characters.component.scss'],
})
export class FilmCharactersComponent implements OnInit {
  titleFilm: string;
  film: Films[];
  characters: Characters[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit(): void {
    this.titleFilm = this.activatedRoute.snapshot.params.title;
    this.filmsService.getFilmByTitle(this.titleFilm).subscribe((film) => {
      this.film = film;
      this.filmsService
        .getCharactersByFilm(this.film[0].characters)
        .subscribe((characters) => (this.characters = characters));
    });
  }
}
