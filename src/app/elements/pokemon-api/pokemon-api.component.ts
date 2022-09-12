import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ConexionAPIService } from 'src/app/services/conexion-api.service';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Pokemon } from 'src/app/class/pokemon';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})

export class PokemonApiComponent implements OnInit {
  
  pokemons:Array<Pokemon> = new Array<Pokemon>();
  pokemonNames:string[] = [];
  nameUser:string = '';
  typeUser:string = '';
  showCard:boolean = false;
  pokemonSelected? = new Pokemon();
  typeList:Array<string> = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];


  myControl = new FormControl('');
  options: string[] = this.pokemonNames;
  filteredOptions: Observable<string[]>;

  formType:FormGroup = this.form.group({
    type: ['']
  });

  constructor(private servicioAPI:ConexionAPIService, private form:FormBuilder) { }

  ngOnInit(): void {
    this.getPokemon();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: string): string {
    return user && user ? user : '';
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getPokemon() {
    this.servicioAPI.pokemonAPI().subscribe(
      (dato:any) => {
        dato.results.forEach(
          (result:any) => {
            this.servicioAPI.pokemonData(result.name).subscribe(
              (response:any) => {
                this.pokemons.push(response);
                this.pokemonNames.push(response.name);
              }
            );
          }
        )
      }
    )
  }

  selectName() {
    this.nameUser = this.myControl.value || '';
  }

  selectType(e:any) {
    let selectedType = e.target;
    this.typeUser = e.target.id;

    let radiobutton = Array.from(document.querySelectorAll('input[type=radio]'));
    
    radiobutton.forEach(
      (input:any) => {
        input.parentElement.style.backgroundColor = 'white';
        input.parentElement.style.borderColor = '#937DC2';
        input.parentElement.style.color = '#937DC2';
      }
    )

    selectedType.parentElement.style.backgroundColor = this.getBgColor(selectedType.id);
    selectedType.parentElement.style.borderColor = this.getBgColor(selectedType.id);
    selectedType.parentElement.style.color = this.getTextColor(selectedType.id);
  }

  removeFilter() {
    this.typeUser = '';
    this.nameUser = '';

    this.myControl.setValue('');

    let radiobutton = Array.from(document.querySelectorAll('input[type=radio]'));

    radiobutton.forEach(
      (input:any) => {
        input.checked = false;
        input.parentElement.style.backgroundColor = 'white';
        input.parentElement.style.borderColor = '#937DC2';
        input.parentElement.style.color = '#937DC2';
      }
    )
  }

  showPokemonCard(pokemon:any){
    this.showCard = true;
    let pokemonCardId = pokemon.id;
    this.pokemonSelected = this.pokemons.find(pokemon => pokemon.id === pokemonCardId);
  }

  parentFunction(data:any)  {
    this.showCard = data;
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  getBgColor(type:any) {
    switch(type) {
      case 'bug' :
        return '#729F3F' ;
      case 'dark' :
        return '#533E2F' ;
      case 'dragon' :
        return '#755FE1' ;
      case 'electric' :
        return '#EED535' ;
      case 'fairy' :
        return '#FDB9E9' ;
      case 'fighting' :
        return '#D56723' ;
      case 'fire' :
        return '#FD7D24' ;
      case 'flying' :
        return '#5EB2E3' ;
      case 'ghost' :
        return '#7B62A3' ;
      case 'grass' :
        return '#9BCC50';
      case 'ground' :
        return '#AB9842' ;
      case 'ice' :
        return '#51C4E7' ;
      case 'normal' :
        return '#A4ACAF' ;
      case 'poison':
        return '#B97FC9';
      case 'psychic':
        return '#F366B9' ;
      case 'rock' :
        return '#A38C21' ;
      case 'steel' :
        return '#9EB7B8' ;
      case 'water' :
        return '#4592C4' ;
      default:
        return 'white';
    }
  }

  getTextColor(type:any) {
    let textColor = 'black';

    if (type == 'dark' || type == 'dragon' || type == 'ghost' || type == 'water') {
      textColor = 'white';
    }

    return textColor;
  }
}
