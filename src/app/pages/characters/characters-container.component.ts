import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Characters } from '../../core/models/characters.interface';
import { CharactersService } from '../../core/services/characters.service';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.scss']
})
export class CharactersContainerComponent implements OnInit {

  characters: Characters[] = [];
  total: number;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    /* this.charactersService.getAllCharacters().subscribe((character) => {
      this.characters = character;
    }); */
    this.fetchCharacters(1);
  }

  fetchCharacters(page: number): void {
    this.charactersService.getAllCharacters(page).pipe(
      tap((data) => {
        this.total = data.count;
        this.p = page;
      }),
      map((response: any) => response.results as Characters[])
    )
      .subscribe(characters => {
        this.characters = characters;
      });
  }

}
