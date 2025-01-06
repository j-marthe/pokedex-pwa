import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 151): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }
}
