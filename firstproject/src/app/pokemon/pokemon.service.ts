import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrlApi } from '@pokemon/shared';
import { switchMap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getPokemonTypeAndDescriptionByName(pokemonName: string): Observable<any> {
    const pokemonSpecie = this.getPokemonSpecieByName(pokemonName);
    const pokemonResume = this.getPokemonResumeByName(pokemonName);
    return forkJoin([pokemonSpecie, pokemonResume]);
  }
  getSpritePokemonByNo(no: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${no}.png`
  }
  getPokemonListByOffset(offset):Observable<any>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=15`;
    return this.http.get(url);
  }
  
  getEvolutionChain(url: string) {
    let pokemonNamesFromChain = [];

    return this.http.get(url)
      .pipe(
        switchMap(
          (
            res => {
              this.getPokemonsNamesFromChain(res["chain"]["evolves_to"], pokemonNamesFromChain)
              return pokemonNamesFromChain;
            }
          )
        )
      )


  }

  public getPokemonSpecieByName(pokemonName: string): Observable<any> {
    return this.http.get(`${baseUrlApi}/pokemon-species/${pokemonName}`);
  }

  public getPokemonResumeByName(pokemonName: string): Observable<any> {
    return this.http.get(`${baseUrlApi}/pokemon/${pokemonName}`);
  }

  private getPokemonsNamesFromChain(evolves_to, pokemonNamesFromChain) {
    if (evolves_to.length > 1) {
      for (let i = 0; i < evolves_to.length; i++) {
        let pokemonName = evolves_to[i].species.name
        pokemonNamesFromChain.push(pokemonName);
      }
      return pokemonNamesFromChain;

    } else {
      if (evolves_to.length !== 0) {
        const pokemonName = evolves_to[0].species.name;
        pokemonNamesFromChain.push(pokemonName);
        this.getPokemonsNamesFromChain(evolves_to[0].evolves_to, pokemonNamesFromChain);
      } else {
        return pokemonNamesFromChain;
      }
    }
  }
 


}

