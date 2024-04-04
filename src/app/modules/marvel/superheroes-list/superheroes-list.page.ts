import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../../core/services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.page.html',
  styleUrls: ['./superheroes-list.page.scss'],
})
export class SuperheroesListPage implements OnInit {

  superheroes: any[] = [];

  constructor(private marvelService: MarvelService, private router: Router) { }

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe(response => {
      console.log(response);
      this.superheroes = response.data.results;

      this.superheroes.map(superhero => {
        superhero.thumbnail.path = this.secureUrl(superhero.thumbnail.path)
      })

    });
  }

  secureUrl(url: string): string {
    if (url.startsWith('http://')) {
      return url.replace('http://', 'https://');
    }
    return url;
  }

  goToDetail(superhero: any) {
    this.router.navigate(['/superhero-detail'], {
      queryParams: {
        superhero: JSON.stringify(superhero)
      }
    });
  }
}
