import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  urlPokemon:string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private peticionHttp:HttpClient) { }

  pokemonAPI():Observable<any> {
    // return this.peticionHttp.get(`${this.urlPokemon}/?limit=5`);
    return this.peticionHttp.get(`${this.urlPokemon}/?limit=811`);
  }

  pokemonData(name:string) {
    return this.peticionHttp.get(`${this.urlPokemon}/${name}`)
  }

}
