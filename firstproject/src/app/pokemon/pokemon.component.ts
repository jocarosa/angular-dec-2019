import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import {PokemonService} from '@pokemon/pokemon.service';
import { descriptioncolors,pokemonsFakeData } from '@env/environment';
import { trigger,state, style,transition,animate,query, stagger }
 from '@angular/animations';
import {rubberBandAnimation} from 'angular-animations';
import{GENERATION} from '@env/environment';
import { Observable, forkJoin} from 'rxjs';



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
                transform:('scale(1.2)')
              }),
              animate('1.5s', 
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

  descriptioncolors = descriptioncolors
  public pokemons = [];//pokemonsFakeData;  
  images: any;
  pokemonAnimate= {}
  pokemonImageSrc={};
  animateOnLoad;
  animationState = false;
  showAnimatedPokemons:boolean;
   pikachuLoading;
 //@Output() findPokemonsByGenerationAndOffset = new EventEmitter();

  constructor(private pokemonService: PokemonService) { 
    setTimeout(() => {
      this.animateOnLoad = 'start' //animation for all pokemons on load
    },0);
  }  
  ngOnInit() {
    
  
  
     //this.findPokemonsByGenerationAndOffset(GENERATION.ONE,1)
    
    
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
 
  findPokemonsByGenerationAndOffset(generacion) {
    this.animationState = false;
     this.pikachuLoading=true;
    setTimeout(() => {
      this.animationState=true;
    }, 1);
    this.pokemons=[];
    let offset = generacion[1];
    const generation =generacion[0];
   let allPokemonData = [];
   for (let i = 1; i < 13; i++) {
      allPokemonData.push(this.getPokemonDataByNumber(offset));
      offset++;
    }
     forkJoin(allPokemonData).subscribe(results => {
      results.map(pokeData=>{
        this.savesPokemon(pokeData);
      //  this.setPokemosChain(pokeData);
        this.pikachuLoading=false;
      })
      this.pokemons= Object.values(this.getAllPokemons());
    }),err=>console.log(err);
    
  }
private getAllPokemons(){
  return this.pokemons;
}
private setPokemosChain(dataByPokemon){
 
  this.pokemons[dataByPokemon[1].name]["chain"]=[];
  dataByPokemon[2].map(chainData=>{
    let pokemonOfChain;
    if(this.thisPokemonExist(chainData[0]["name"])){
      pokemonOfChain = this.pokemons[chainData[0]["name"]];
    }else{
      pokemonOfChain = this.getPokemon(chainData);
      this.savesPokemon(chainData);
    }
    this.pokemons[dataByPokemon[1].name]["chain"].push(pokemonOfChain);
  })
  
}
 private thisPokemonExist(name){
   
    return this.pokemons[name] != undefined;

  }

  private getPokemon(res){
    let pokemon = [];
    const pokemonSpecie = res[0];
    const pokemonResume = res[1];
    const flavor_text_entries = pokemonSpecie.flavor_text_entries;

    pokemon["name"] = pokemonResume.name;
    pokemon["description"] = this.getPokemonDescription(flavor_text_entries);
    pokemon["sprite"] = pokemonResume.sprites.front_default;
    pokemon["types"] = this.getPokemonTypes(pokemonResume.types);
    pokemon["generation"] = pokemonSpecie.generation.name;
    return pokemon;
  }
  
  private savesPokemon(pokemonData){
    const pokemon = this.getPokemon(pokemonData);
    this.pokemons[pokemonData[1].name]=pokemon;
  }
  private getPokemonDataByNumber(pokemonNo){
    const pokemonData = this.pokemonService.getPokemonDataByNumber(pokemonNo);
    return pokemonData;
   }


  private getPokemonTypes(typesR:any[]){
    let types = [];
    for(let i=0;i<typesR.length;i++){
        types.push(typesR[i].type.name);
    }
    return types; 
  }
 
  private getPokemonDescription(flavor_text_entries:any[]){
    for (let i = 0; i < flavor_text_entries.length; i++) {
      const currentText = flavor_text_entries[i];
      if (currentText.language.name == "en") {
        return currentText.flavor_text;
      }
    }
  }

}

interface pokemon {
  name:string,
  description:string,
  sprite: string,
  types: string[], 
  evolution_chain:  pokemon[],
  generation:string
}