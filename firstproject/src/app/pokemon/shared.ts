
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