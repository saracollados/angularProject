import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/class/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input('pokemonSelected') pokemonSelected?:Pokemon;
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  showCard:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  sendCloseCard() {
    this.showCard = false;
    this.parentFunction.emit(this.showCard);
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
