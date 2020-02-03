export const environment = {
  production: false
};
export const GENERATION ={
  ONE:"generation-i",
  TWO:"generation-ii",
  THREE:"generation-iii",
  FOUR:"generation-iv",
  FIVE:"generation-v",
  SIX:"generation-vi",
  SEVEN:"generation-vii"
}

/*export const LIMITBYGENERATION = {
  "generation-i":151,
  "generation-ii":248,
  "generation-iii":376,
  "generation-iv":478,
  "generation-v":637,
  "generation-vi":721,
  "generation-vii":807,
}*/

export const baseUrlApi = "https://pokeapi.co/api/v2";
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
  ghost:"#574b90"
}
export const pokemonsFakeData =[{
  name:'pikachu',
  front_default:"https://img.pokemondb.net/sprites/black-white/normal/pikachu.png",
  description:'Pikachu is a mouse pokemon',
  evolutions:[
    {
      name:"raichu",
      front_default:"https://img.pokemondb.net/sprites/black-white/normal/raichu.png",
      description:'Pikachu is a mouse pokemon'
    },
    {
      name:"pichu",
      front_default:"https://img.pokemondb.net/sprites/black-white/normal/pichu.png",
      description:'pichu is a mouse pokemon'
    }
  ],
  types:[
    {
     
      name:"electric"
     
    }
  ]
}, 
];


