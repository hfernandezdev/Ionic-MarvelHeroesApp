import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private apiUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCharacters(): Observable<any> {
    const ts = new Date().getTime().toString();
    const hash = this.authService.generateHash(ts);
    const url = `${this.apiUrl}characters?apikey=${this.authService.apiKey}&ts=${ts}&hash=${hash}`;
    return this.http.get(url);
  }
}
