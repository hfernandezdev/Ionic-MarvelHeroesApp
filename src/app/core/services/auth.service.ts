import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiKey = 'f9f8c2778abe28b48dfbfbeae2fb5863';
  private privateKey = '9a8efea9b849bd38277aee2818a8236e9d96ee98';

  constructor() { }

  generateHash(timestamp: string): string {
    const hashGenerator = new Md5();
    const hash = hashGenerator.appendStr(timestamp + this.privateKey + this.apiKey)?.end()?.toString() || '';
    return hash;
  }
}
