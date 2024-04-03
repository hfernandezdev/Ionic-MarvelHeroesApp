import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../../core/services/marvel.service';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.page.html',
  styleUrls: ['./superheroes-list.page.scss'],
})
export class SuperheroesListPage implements OnInit {

  superheroes: any[] = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe(response => {
      console.log(response);
      this.superheroes = response.data.results;
    });
  }

}
