import { Component, OnInit } from '@angular/core';
import {descriptioncolors,pokemonsFakeData} from '../../environments/environment';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  descriptioncolors = descriptioncolors
  pokemons =pokemonsFakeData

  constructor() { }

  ngOnInit() {

   }


}
