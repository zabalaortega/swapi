import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import { Films } from '../../core/models/films.interface';

@Component({
  selector: 'app-films-container',
  templateUrl: './films-container.component.html',
  styleUrls: ['./films-container.component.scss'],
})
export class FilmsContainerComponent implements OnInit {
  films: Films[];

  constructor(private fmService: FilmsService) {}

  ngOnInit(): void {
    this.fmService.getAllFilms().subscribe((films) => {
      this.films = films;
    });
  }
}
