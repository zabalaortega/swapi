import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCharactersComponent } from './film-characters.component';

describe('FilmCharactersComponent', () => {
  let component: FilmCharactersComponent;
  let fixture: ComponentFixture<FilmCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
