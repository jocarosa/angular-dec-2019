import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PokemonService } from '@pokemon/pokemon.service';
import { parseDataPokemon,descriptioncolors } from '@pokemon/shared'

@Component({
  selector: 'modal-evolution-cmp',
  templateUrl: './modal-evolution-cmp.html',
  styleUrls: ['./modal-evolution-cmp.css']
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
  pokemon=[];
  
  openModal(pokemon){
    this.getPokemonResume(pokemon.name);
  }

  changePokemonChain(pokemon){
    this.pokemon = pokemon;
    this.getPokemonChain();
  }

  getPokemonResume(pokemonName){
    this.pokemonService.getPokemonTypeAndDescriptionByName(pokemonName).subscribe(pokemonData=>{
     this.pokemon = parseDataPokemon(pokemonData);
     this.getPokemonChain();
    });
  }
  
  getPokemonChain(){
    let m=[];
    let n=1;
    this.pokemonService.getEvolutionChain(this.pokemon["chain_url"]).subscribe(pokemonName=>{
      this.pokemonService.getPokemonTypeAndDescriptionByName(pokemonName).subscribe(pokemonData=>{
        m.push(
          parseDataPokemon(pokemonData)
       );

       this.pokemon["pokemonChain"] = m;
       if(n == pokemonData.length){
          this.modalRef = this.modalService.show(this.evolutionChainTemplate);
       }
       n++;
       debugger
      })
    });
  }
}
