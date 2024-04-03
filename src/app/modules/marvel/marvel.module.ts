import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarvelService } from '../../core/services/marvel.service';

import { SuperheroesListPageModule } from './superheroes-list/superheroes-list.module';
import { SuperheroDetailPageModule } from './superhero-detail/superhero-detail.module';

@NgModule({
  declarations: [
    SuperheroesListPageModule,
    SuperheroDetailPageModule
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [MarvelService]
})
export class MarvelModule { }
