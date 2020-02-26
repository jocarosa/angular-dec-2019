import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '@pokemon/pokemon.service';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { rubberBandAnimation } from 'angular-animations';
import { GENERATION, descriptioncolors } from '@pokemon/shared';
import { EvolutionModalComponent } from './modal-evolution-cmp/modal-evolution-cmp';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.cmp.html',
  styleUrls: ['./pokemon.cmp.css'],
  animations: [
    trigger('pokemonContainerAnimate', [
      state("out", style({
        transform: 'scale(1)',

      })),
      state('over', style({
        transform: 'scale(1.1)'
      })),
      transition('over=>out', animate('1000ms')),
    ]),

    trigger(
      'query', [
      transition(
        '* => start', [
        query('.contai', [
          stagger(130, []),
          style({
            opacity: 1,
            transform: ('scale(1.2)')
          }),
          animate('0.2s',
            style({
              opacity: 1,
              transform: ('scale(1)')
            }))
        ]),
      ]),
    ]),

    rubberBandAnimation()
  ]

})

export class PokemonComponent implements OnInit {

  @ViewChild(EvolutionModalComponent, { static: false })
  private evolutionModal: EvolutionModalComponent;
  descriptioncolors = descriptioncolors
  public pokemons = []; 
  pokeke = [];
  images: any;
  pokemonAnimate = {}
  pokemonImageSrc = {};
  animateOnLoad:any;
  showAnimatedPokemons: boolean;
  genera: any;

  constructor(private pokemonService: PokemonService,
  ) {
    setTimeout(() => {
      this.animateOnLoad = 'start' //animation for all pokemons on load
    }, 0);
  }
  ngOnInit() {

    this.genera = {
      start: 0, end: 150, generation: "generation-i"
    };

    this.findPokemonsByGenerationAndOffset(GENERATION.ONE)


  }

  toggle(pokemon) {

    if (this.pokemonAnimate[pokemon.name] == "over") {
      this.pokemonImageSrc[pokemon.name] = pokemon.front_default;
      this.pokemonAnimate[pokemon.name] = "out";

    } else {
      this.pokemonAnimate[pokemon.name] = "over";
      this.pokemonImageSrc[pokemon.name] = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`;

    }
  }

  animationState = false;
  startAnimation() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  pikachuLoading;
   
  findPokemonsByGenerationAndOffset(generacion) {

    if (generacion.menu) {
      this.genera = generacion; // set size paginator by the number of pokemomns
    }
    this.pokemons = [];
    this.startAnimation();
    this.pikachuLoading = true;
    let offset = generacion.start;
    this.pokemonService.getPokemonListByOffset(offset).subscribe(
      {
        next:pokemon=>{
          this.savesPokemon(generacion,pokemon);
        }
      }
    );
   }

  private savesPokemon(generation, pokemon) {
   
    let pokemonList=[];

    pokemon.results.map(currentPokemon=>{
      const pokemonNo = currentPokemon.url.split("pokemon")[1].replace("/","").replace("/","");
      pokemonList.push({
        name : currentPokemon.name,
        sprite : this.pokemonService.getSpritePokemonByNo(pokemonNo),
        no:pokemonNo,
        isValid : pokemonNo <= generation.end
      });
    });

    this.pikachuLoading = false;
    this.pokeke = pokemonList;
  }

  openModal(pokemon) {
    this.evolutionModal.openModal(pokemon);
  }


}



