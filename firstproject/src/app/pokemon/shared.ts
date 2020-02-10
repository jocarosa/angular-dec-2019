
export function  getPokemonSpecieAndDescriptionByNo(pokemonNo, pokemonService){
    const pokemonData = pokemonService.getPokemonDataByNo(pokemonNo);
    return pokemonData;
}

export function parseDataPokemon(pokeData) {
    let pokemon = [];
    const pokemonSpecie = pokeData[0];
    const pokemonResume = pokeData[1];
    const flavor_text_entries = pokemonSpecie.flavor_text_entries;
  
    pokemon["name"] = pokemonResume.name;
    pokemon["description"] =getDescriptionOfPokemon(flavor_text_entries);
    pokemon["sprite"] = pokemonResume.sprites.front_default;
    pokemon["types"] = getTypesOfPokemon(pokemonResume);
    pokemon["generation"] = pokemonSpecie.generation.name;
    pokemon["chain_url"] = pokemonSpecie.evolution_chain.url;
    return pokemon;
  }

   function getTypesOfPokemon(pokemonResume){
    let types = [];
    for (let i = 0; i < pokemonResume.types.length; i++) {
      types.push(pokemonResume.types[i].type.name);
    }
    return types;
   }


   function getDescriptionOfPokemon(flavor_text_entries){
    for (let i = 0; i < flavor_text_entries.length; i++) {
        const currentText = flavor_text_entries[i];
        if (currentText.language.name == "en") {
          return currentText.flavor_text;
        }
     }
   }

   export const descriptioncolors = {
    electric:"#fed330",
    poison:"#8854d0",
    fire:"#eb3b5a",
    water:"#2d98da",
    normal:"#ffb8b8",
    dragon:"#4b4b4b",
    bug:"#6F1E51",
    grass:"#badc58",
    flying:"#ffbe76",
    fairy:"yellow",
    dark:"#264348",
    fighting:"#6F1E51",
    psychic:"#D980FA",
    ground:"#EAB543",
    ghost:"#574b90",
    rock:"#f7f1e3",
    steel:"#d1ccc0",
    ice:"#ffffff"
  
  }