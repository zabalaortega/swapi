import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContainerComponent } from './characters-container.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CharactersContainerComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    NgxPaginationModule
  ]
})
export class CharactersModule { }
