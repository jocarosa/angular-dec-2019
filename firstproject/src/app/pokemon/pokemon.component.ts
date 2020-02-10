import { Component, OnInit,ViewChild } from '@angular/core';
import { PokemonService } from '@pokemon/pokemon.service';
import { descriptioncolors, pokemonsFakeData } from '@env/environment';
import { trigger,state, style,transition,animate,query, stagger } from '@angular/animations';
import { rubberBandAnimation } from 'angular-animations';
import { GENERATION } from '@env/environment';
import { forkJoin } from 'rxjs';
import { EvolutionModalComponent } from './evolution-modal/evolution-modal.component';
import {getPokemonSpecieAndDescriptionByNo,parseDataPokemon} from './shared'

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
            query('.contai', [
              stagger(130,[]),
              style({
                opacity:1,
                transform:('scale(1.2)')
              }),
              animate('0.2s', 
                style({
                  opacity:1,
                  transform:('scale(1)')
                }))
            ]),
        ]),
      ]),

      rubberBandAnimation()
  ]
  
})
    
export class PokemonComponent implements OnInit {

  @ViewChild(EvolutionModalComponent,{static:false}) 
  private evolutionModal:EvolutionModalComponent;
  descriptioncolors = descriptioncolors
  public pokemons = [];//pokemonsFakeData;  
  pokeke=[];
  images: any;
  pokemonAnimate= {}
  pokemonImageSrc={};
  animateOnLoad;
  showAnimatedPokemons:boolean;
  genera:any;

  constructor(private pokemonService: PokemonService,
   ) { 
    setTimeout(() => {
      this.animateOnLoad = 'start' //animation for all pokemons on load
    },0);
  }  
  ngOnInit() {
    
    this.genera =  {
      start:1,end:150,generation:"generation-i"
    };
  
     this.findPokemonsByGenerationAndOffset(GENERATION.ONE)
    
    
  }

  toggle(pokemon){
    
    if(this.pokemonAnimate[pokemon.name] == "over"){
      this.pokemonImageSrc[pokemon.name] = pokemon.front_default;
      this.pokemonAnimate[pokemon.name] = "out";
    
    }else{
      this.pokemonAnimate[pokemon.name] = "over";
      this.pokemonImageSrc[pokemon.name]=`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`;
      
    }
  }

  animationState = false;
  startAnimation(){
    this.animationState = false;
    setTimeout(() => {
      this.animationState=true;
    }, 1);
  }

  allPokemonData = [];
  pikachuLoading;

  findPokemonsByGenerationAndOffset(generacion) {

    if(generacion.tab){
      this.genera =  generacion; // set size paginator by the number of pokemomns
     }
    this.pokemons = [];
     this.startAnimation();
     let offset = generacion.start;
     this.pikachuLoading=true;
     for (let i = 1; i < 16; i++) {  //paginator next 10
        this.savesPokemon(generacion.generation,offset);
        offset++;
     }
  }
  private savesPokemon(generation, pokemonNo) {

    const pokemonSpecieAndDescription = getPokemonSpecieAndDescriptionByNo(pokemonNo,this.pokemonService);
    forkJoin(pokemonSpecieAndDescription).subscribe(
      {
        next: d => {
          const pokemon = parseDataPokemon(d[0]);
          if (this.pokemons.length < 15
          ) {
            pokemon["isValid"] = generation == pokemon["generation"];
            this.pokemons.push(pokemon);
          }

          if (this.pokemons.length == 15) {
            this.pokeke = this.pokemons;
            this.pikachuLoading = false;
          }
        }
      }
    );
  }


 pokemonChains = [];

/*private pokemonExist(pokemon){
  
    for(let i=0;i<this.pokemons.length;i++){
       if(this.pokemons[i].name == pokemon.name){
        return true;
       }
    }

    return false;
}*/

openModal(pokemon){
  this.evolutionModal.openModal(pokemon,this.pokemons);
}

/*getAllPokemons(){
  return this.pokemons;
}*/

}



interface pokemon {
  name:string,
  description:string,
  sprite: string,
  types: string[], 
  evolution_chain:  pokemon[],
  generation:string
}