import { Component, OnInit } from '@angular/core';
import { descriptioncolors,pokemonsFakeData } from '@env/environment';
import { trigger,state, style,transition,animate,query, stagger } from '@angular/animations';

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
    ]),
    
    trigger(
      'query', [
        transition(
          '* => start', [
            query('.pokemonContainer', [
              stagger(130,[]),
              style({
                opacity:1,
                transform:('scale(1.4)')
              }),
              animate('1.5s', 
                style({
                  opacity:1,
                  transform:('scale(1)')
                }))
            ]),
        ]),
      ]),

  ]
})
    
export class PokemonComponent implements OnInit {

  descriptioncolors = descriptioncolors
  pokemons = pokemonsFakeData 
  images: any;
  pokemonAnimate= {}
  pokemonImageSrc={};
  animateOnLoad;
  showAnimatedPokemons:boolean;
  constructor() { 
    setTimeout(() => {
      this.animateOnLoad = 'start'
    },0);
  }  
  ngOnInit() {
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
