import { Component, OnInit } from '@angular/core';
import {descriptioncolors,pokemonsFakeData} from '../../environments/environment';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  descriptioncolors = descriptioncolors
  pokemons = pokemonsFakeData
  images: any;
  constructor() { }

  ngOnInit() {
    this.images = [944, 1011, 984].map((current) => `https://picsum.photos/id/${current}/900/500`);
  }


}
