import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.page.html',
  styleUrls: ['./superhero-detail.page.scss'],
})
export class SuperheroDetailPage implements OnInit {

  superhero: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['superhero']) {
        this.superhero = JSON.parse(params['superhero']);
      }
    });
  }

}
