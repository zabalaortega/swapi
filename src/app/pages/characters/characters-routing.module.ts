import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersContainerComponent } from './characters-container.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
