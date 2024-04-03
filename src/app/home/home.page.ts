import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../core/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  characters: any[] = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe(response => {
      console.log(response);
      this.characters = response.data.results;
    });
  }

}
