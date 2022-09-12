import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../class/pokemon';

@Pipe({
  name: 'filterPokemon'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(pokemons:Array<Pokemon>, typeUser:string, nameUser:string): any {
    let pokemonsValidos:Array<Pokemon> = [];

    if(pokemons.length === 0 || (typeUser === '' && nameUser === '')) {
      pokemonsValidos = pokemons;
    }

    
    if (typeUser === '' && nameUser !== '') {
      for(let pokemon of pokemons) {
        if (pokemon.name == nameUser || pokemon.id == parseInt(nameUser)) {
          pokemonsValidos.push(pokemon);
        }
      }
    }

    if (typeUser !== '' && nameUser === '') {
      for(let pokemon of pokemons) {
        for (let i = 0; i < pokemon.types.length; i++) {
          if (pokemon.types[i].type.name == typeUser) {
            pokemonsValidos.push(pokemon);
            
          }
        }
      }
    }

    if (typeUser !== '' && nameUser !== '') {
      for(let pokemon of pokemons) {
        if (pokemon.name == nameUser || pokemon.id == parseInt(nameUser)) {
          for (let i = 0; i < pokemon.types.length; i++) {
            if (pokemon.types[i].type.name == typeUser) {
              pokemonsValidos.push(pokemon);
            }
          }
        }
      }
    }
    
    return pokemonsValidos;
  }
}
