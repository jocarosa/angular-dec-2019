import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PokemonService } from '@pokemon/pokemon.service';
import { getPokemonSpecieAndDescriptionByNo,parseDataPokemon } from '@pokemon/shared'

@Component({
  selector: 'app-evolution-modal',
  templateUrl: './evolution-modal.component.html',
  styleUrls: ['./evolution-modal.component.css']
})
export class EvolutionModalComponent implements OnInit {

  modalRef: BsModalRef; 
  constructor(
    private modalService: BsModalService,
    private pokemonService:PokemonService
    ) { }

  ngOnInit() {
  }
  pokemonChains=[];
  pokemons;
  template:TemplateRef<any>

  openModal(pokemon,pokemons){
    this.pokemons = pokemons;
    this.modalRef = this.modalService.show(this.template);
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

  private getPokemonFromCache(pokemonName){
    return  this.pokemons.find(x=>x.name == pokemonName)
  }


}
