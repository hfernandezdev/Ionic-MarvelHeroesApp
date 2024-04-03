import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'superheroes-list',
    pathMatch: 'full'
  },
  {
    path: 'superheroes-list',
    loadChildren: () => import('./modules/marvel/superheroes-list/superheroes-list.module').then( m => m.SuperheroesListPageModule)
  },
  {
    path: 'superhero-detail',
    loadChildren: () => import('./modules/marvel/superhero-detail/superhero-detail.module').then( m => m.SuperheroDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
