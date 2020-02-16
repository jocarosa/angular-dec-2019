import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {collapseAnimation} from 'angular-animations';
import {GENERATION} from '@pokemon/shared'

import {PokemonService} from '@pokemon/pokemon.service';

@Component({
  selector: 'menu-generation-cmp',
  templateUrl: './menu-generation-cmp.html',
  styleUrls: ['./menu-generation-cmp.css'],
  animations:[
    collapseAnimation()
  ]
})
export class TabComponentComponent implements OnInit {

  constructor(private pokemonService:PokemonService) { }
  linksGenerations;
  generation = GENERATION;

  @Output() findGeneration = new EventEmitter<any>();

  ngOnInit() {}
  
  find(generation){
    debugger
    generation["currentPage"]=1;
    generation["menu"]=true;
    this.findGeneration.emit(generation);
  }
  getSpritePokemonByNo(no:string){
    return this.pokemonService.getSpritePokemonByNo(no);
  }

}
