import { Component, OnInit } from '@angular/core';
import {collapseAnimation} from 'angular-animations';

import {PokemonService} from '@pokemon/pokemon.service';

@Component({
  selector: 'menu-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css'],
  animations:[
    collapseAnimation()
  ]
})
export class TabComponentComponent implements OnInit {

  constructor(private pokemonService:PokemonService) { }
  linksGenerations;
  collapse_1=false;


  ngOnInit() {
    this.linksGenerations = this.getAllGenerationsLinks(8);

  }


  getAllGenerationsLinks(noGenerations){
    let links= {};
    let all = [];
    for(let i=1;i<=noGenerations;i++){
        links["img"]=`<img src="">`;
        links["name"]=`Generation ${i}`;
        all.push (links);
        links = {};
    }
    return all;
  }

  active(){
    console.log("llegue");
    setTimeout(() => {
      this.collapse_1 = !this.collapse_1;
    }, 1);
  }

  getSpreadPokemonByNo(no:number){
    return this.pokemonService.getSpreadPokemonByNo(no);
  }

}
