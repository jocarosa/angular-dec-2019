import { Injectable } from '@angular/core';
import { Observable,forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrlApi } from '@env/environment';
import { switchMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) { }

 
  getPokemonDataByNumber(pokemonNo:number):Observable<any> {
      const pokemonSpecie = this.getPokemonSpecieByNo(pokemonNo);
      let pokemonNumbersFromChain = [];
      const pokemonResume = this.getPokemonResumeByNo(pokemonNo);

      /*let pokemonEvolutionChain = pokemonSpecie.pipe(
        switchMap(p=> this.http.get(`${p.evolution_chain.url}`).pipe(
          switchMap(param => this.getEvolutionChain(param,pokemonNumbersFromChain))  
          )
        )
      )*/
      
      return forkJoin([pokemonSpecie,pokemonResume]);
  }

  private getEvolutionChain(param,pokemonNumbersFromChain){
    this.getPokemonsNumbersFromChain(param.chain.evolves_to, pokemonNumbersFromChain);
    let d = [];
     pokemonNumbersFromChain.map(no => {
       d.push(this.getPokemonDataChainByNo(no));
      
    });
    return forkJoin(d);
  }

  private getPokemonDataChainByNo(pokemonNo:number){ 
    let s=[]
     s.push(this.getPokemonSpecieByNo(pokemonNo));
     s.push(this.getPokemonResumeByNo(pokemonNo));
    return forkJoin(s);
  }

  public getPokemonSpecieByNo(pokemonNo:number):Observable<any>{
   return this.http.get(`${baseUrlApi}/pokemon-species/${pokemonNo}`);
  }
 
  public getPokemonResumeByNo(pokemonNo:number):Observable<any>{
    return  this.http.get(`${baseUrlApi}/pokemon/${pokemonNo}`);
  }
 
  private getPokemonsNumbersFromChain(evolves_to,pokemonNumbersFromChain){
    if (evolves_to.length !== 0) {
      pokemonNumbersFromChain.push(this.getNoFromUrl(evolves_to[0].species.url));
      this.getPokemonsNumbersFromChain(evolves_to[0].evolves_to,pokemonNumbersFromChain);
    }else{
      return pokemonNumbersFromChain;
    }
  }
  private getNoFromUrl(url){
    return url.split("/")[6]
  }

  public getSpritePokemonByNo(no: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${no}.png`
  }


}

