import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor() { }


getSpreadPokemonByNo(number:number){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
}


getEvolutionChainByGeneration(noGeneration:number){
  let groupEvolutions =[]
  let evolution = {};
  //evolution
  //https://pokeapi.co/api/v2/evolution-chain/${pokemonNo}/
  //.chain.evolves_to[0].species.name
 
  
  //for
  evolution["name"]="",
  evolution["front_default"]=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${noGeneration}.png`,
  evolution["description"]=''
  groupEvolutions[noGeneration].push(evolution);
  evolution = {};

  return groupEvolutions;
}

getPokemonSpecieByGeneration(noGeneration:number){
   //description
  //https://pokeapi.co/api/v2/pokemon-species/1/
  //.flavor_text_entries[1].flavor_text
  let pokemonRange = [];
  switch(noGeneration){
    case 1: pokemonRange = [1,150];
    case 2: pokemonRange = [151,250];
  /*  case 3: pokemonRange = [1,150];
    case 4: pokemonRange = [1,150];
    case 5: pokemonRange = [1,150];
    case 6: pokemonRange = [1,150];
    case 7: pokemonRange = [1,150]; */  
  }
  
  let generation = [];
  //for start
  let specie =[];
  let pokemon = {};
  pokemon["name"]="";
  pokemon["front_default"]=""
  pokemon["description"]=""

  specie.push(pokemon);
  generation[noGeneration].push(specie);
  specie=[];
  //for ends
  
  return generation;

}

buildPokemonData(){

  let pokemon ={};


  pokemon["name"]="";
  pokemon["front_default"]=""


}


}