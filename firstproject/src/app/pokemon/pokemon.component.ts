import { Component, OnInit } from '@angular/core';
import {descriptioncolors,pokemonsFakeData} from '../../environments/environment';
import {trigger,state, style,transition,animate} from '@angular/animations';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  animations:[
    trigger('pokemonContainerAnimate',[
      state("out",style({
          transform:'scale(1)',
          
      })),
      state('over',style({
        transform:'scale(1.1)'
      })),
      transition('over=>out',animate('1000ms')),
      transition('over=>out',animate('1000ms'))
    ]),
   
  ]
})

export class PokemonComponent implements OnInit {

  descriptioncolors = descriptioncolors
  pokemons = pokemonsFakeData 
  images: any;
  pokemonAnimate= {}
  pokemonImageSrc={};
  constructor() { }

  ngOnInit() {
//    this.images = [944, 1011, 984].map((current) => `https://picsum.photos/id/${current}/900/500`);
  }
  toggle(pokemon){
    
    if(this.pokemonAnimate[pokemon.name] == "over"){
      this.pokemonImageSrc[pokemon.name] = pokemon.sprites.front_default;
      this.pokemonAnimate[pokemon.name] = "out";
    
    }else{
      this.pokemonAnimate[pokemon.name] = "over";
      this.pokemonImageSrc[pokemon.name]=`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`;
      
    }
  }


}
