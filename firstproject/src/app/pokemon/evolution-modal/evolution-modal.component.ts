import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PokemonService } from '@pokemon/pokemon.service';
import { getPokemonSpecieAndDescriptionByNo,parseDataPokemon,descriptioncolors } from '@pokemon/shared'

@Component({
  selector: 'app-evolution-modal',
  templateUrl: './evolution-modal.component.html',
  styleUrls: ['./evolution-modal.component.css']
})
export class EvolutionModalComponent implements OnInit {
  @ViewChild('evolutionChainTemplate',{static:false})
  private evolutionChainTemplate:TemplateRef<any>
  descriptioncolors = descriptioncolors;
  modalRef: BsModalRef; 
  constructor(
    private modalService: BsModalService,
    private pokemonService:PokemonService
    
    ) { }

  ngOnInit() {
  }
  pokemonChains=[];
  pokemons;
  pokemon;
  
  openModal(pokemon,pokemons?){
    this.pokemons = pokemons;
    this.pokemon=pokemon;
    this.modalRef = this.modalService.show(this.evolutionChainTemplate);
    const pokemonChainUrl=pokemon["chain_url"];
    if(this.pokemonChains[pokemonChainUrl] == null ){
      this.pokemonChains[pokemonChainUrl]=[];
       this.savesEvolutionChain(pokemonChainUrl);
    }
  }

private savesEvolutionChain(pokemonChainUrl:string){  
    this.pokemonService.getEvolutionChainByName(pokemonChainUrl).subscribe(pokemonName=>{
      const pokemonFromCache = this.getPokemonFromCache(pokemonName)
      if(pokemonFromCache){
        this.pokemonChains[pokemonChainUrl].push(pokemonFromCache);
      }else{
        const pokemondata = getPokemonSpecieAndDescriptionByNo(pokemonName,this.pokemonService);
        pokemondata.subscribe(d=>{
          this.pokemonChains[pokemonChainUrl].push(parseDataPokemon(d));
        })
      }
    })
  }

  getPokemonChain(pokemon){
    const pokemonChainUrl=pokemon["chain_url"];
    return this.pokemonChains[pokemonChainUrl];
  }
  changePokemonChain(pokemon){
    this.pokemon = pokemon;
  }

  private getPokemonFromCache(pokemonName){
    return  this.pokemons.find(x=>x.name == pokemonName)
  }


}
