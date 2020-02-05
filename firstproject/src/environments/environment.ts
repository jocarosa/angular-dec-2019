export const environment = {
  production: false
};
export const GENERATION ={
  ONE:{
    "start":1,
    "end": 151
  },
  TWO:{
    "start":152,
    "end": 251
  },
  THREE:{
    "start":252,
    "end": 386
  },
  FOUR:{
    "start":387,
    "end": 493
  },
  FIVE:{
    "start":494,
    "end": 649
  },
  SIX:{
    "start":650,
    "end": 721
  },
  SEVEN:{
    "start":722,
    "end": 752
  }
}

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
  ghost:"#574b90",
  rock:"#f7f1e3",
  steel:"#d1ccc0",
  ice:"#ffffff"

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


