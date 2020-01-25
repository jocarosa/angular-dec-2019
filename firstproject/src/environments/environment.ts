export const environment = {
  production: false
};

export const descriptioncolors = {
  electric:"#fed330",
  poison:"#8854d0",
  fire:"#eb3b5a",
  water:"#2d98da",
  normal:"#ffb8b8",
  dragon:"#4b4b4b",
  bug:"#6F1E51"
}
export const pokemonsFakeData =[{
  name:'pikachu',
  front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  description:'Pikachu is a mouse pokemon',
  evolutions:[
    {
      name:"raichu",
      front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      description:'Pikachu is a mouse pokemon'
    },
    {
      name:"pichu",
      front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
      description:'pichu is a mouse pokemon'
    }
  ],
  types:[
    {
      type:{
        name:"electric"
      }
    }
  ]
}, 
];

export const pokemonsFakeDatas =[{
  name:'pikachu',
  sprites:{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},
  description:'Pikachu is a mouse pokemon',
  types:[
    {
      type:{
        name:"electric"
      }
    }
  ]
}, 
{name:'mewtwo',
sprites:{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"},
description:'Pikachu is a mouse pokemon',
types:[
  {
    type:{
      name:"normal"
    }
  },
  {
    type:{
      name:"electric"
    } 
  }
]
}, 
{name:'pichu',
sprites:{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"},
description:'Pichu is a mouse pokemon fsdfsd sdsdfas asdfasd asdfas asdfasdasdsad sadf asdfasd',
types:[
  {
    type:{
      name:"electric"
    }
  },
  {
    type:{
      name:"electric"
    }
  }
]
}, 
{name:'charmander',
sprites:{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
description:'Pikachu is a mouse pokemon',
types:[
  {
    type:{
      name:"fire"
    }
  },
  {
    type:{
      name:"dragon"
    }
  }
]
}, 
{name:'ditto',
sprites:{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
description:'Pikachu is a mouse pokemon',
types:[
  {
    type:{
      name:"electric"
    }
  },
  {
    type:{
      name:"electric"
    }
  }
]
}, 
{name:'kakuna',
sprites:{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"},
description:'Pikachu is a mouse pokemon',
types:[
  {
    type:{
      name:"electric"
    }
  },
  {
    type:{
      name:"poison"
    }
  }
]
}];


