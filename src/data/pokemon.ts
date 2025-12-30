export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
    height: number;
    weight: number;
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
    description: string;
    generation: number;
    evolutionChain?: {
        stage: number;
        prevId?: number;
        prevName?: string;
        nextId?: number;
        nextName?: string;
    };
    alternateForms?: {
        name: string;
        sprite: string;
    }[];
}

// **************************************************************
// ************************ POKEMON DATA ************************
// **************************************************************

// *************************** GEN 1 ****************************
export const pokemonData: Pokemon[] = [
    {
        id: 1,
        name: "Bulbasaur",
        types: ["grass", "poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        height: 7,
        weight: 69,
        abilities: ["Overgrow", "Chlorophyll"],
        stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
        description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
        generation: 1,
        evolutionChain: { stage: 1, nextId: 2, nextName: "Ivysaur" }
    },
    {
    id: 2,
    name: "Ivysaur",
    types: ["grass", "poison"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    height: 10,
    weight: 130,
    abilities: ["Overgrow", "Chlorophyll"],
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    generation: 1,
    evolutionChain: { stage: 2, prevId: 1, prevName: "Bulbasaur", nextId: 3, nextName: "Venusaur" }
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["grass", "poison"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    height: 20,
    weight: 1000,
    abilities: ["Overgrow", "Chlorophyll"],
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    generation: 1,
    evolutionChain: { stage: 3, prevId: 2, prevName: "Ivysaur" },
    alternateForms: [
      {
        name: "Mega Venusaur",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png"
      }
    ]
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    height: 6,
    weight: 85,
    abilities: ["Blaze", "Solar Power"],
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    generation: 1,
    evolutionChain: { stage: 1, nextId: 5, nextName: "Charmeleon" }
  },
  {
    id: 5,
    name: "Charmeleon",
    types: ["fire"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    height: 11,
    weight: 190,
    abilities: ["Blaze", "Solar Power"],
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    description: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    generation: 1,
    evolutionChain: { stage: 2, prevId: 4, prevName: "Charmander", nextId: 6, nextName: "Charizard" }
  },
  {
    id: 6,
    name: "Charizard",
    types: ["fire", "flying"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    height: 17,
    weight: 905,
    abilities: ["Blaze", "Solar Power"],
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    generation: 1,
    evolutionChain: { stage: 3, prevId: 5, prevName: "Charmeleon" },
    alternateForms: [
      {
        name: "Mega Charizard X",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png"
      },
      {
        name: "Mega Charizard Y",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png"
      }
    ]
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["water"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    height: 5,
    weight: 90,
    abilities: ["Torrent", "Rain Dish"],
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    generation: 1,
    evolutionChain: { stage: 1, nextId: 8, nextName: "Wartortle" }
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["water"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    height: 10,
    weight: 225,
    abilities: ["Torrent", "Rain Dish"],
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    description: "It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.",
    generation: 1,
    evolutionChain: { stage: 2, prevId: 7, prevName: "Squirtle", nextId: 9, nextName: "Blastoise" }
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["water"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    height: 16,
    weight: 855,
    abilities: ["Torrent", "Rain Dish"],
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    description: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    generation: 1,
    evolutionChain: { stage: 3, prevId: 8, prevName: "Wartortle" },
    alternateForms: [
      {
        name: "Mega Blastoise",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10036.png"
      }
    ]
  },
];

export const types: string[] = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
];

export const typeColors: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC"
};

export const typeGlowColors: Record<string, string> = {
  normal: "rgba(168, 168, 120, 0.5)",
  fire: "rgba(240, 128, 48, 0.5)",
  water: "rgba(104, 144, 240, 0.5)",
  electric: "rgba(248, 208, 48, 0.5)",
  grass: "rgba(120, 200, 80, 0.5)",
  ice: "rgba(152, 216, 216, 0.5)",
  fighting: "rgba(192, 48, 40, 0.5)",
  poison: "rgba(160, 64, 160, 0.5)",
  ground: "rgba(224, 192, 104, 0.5)",
  flying: "rgba(168, 144, 240, 0.5)",
  psychic: "rgba(248, 88, 136, 0.5)",
  bug: "rgba(168, 184, 32, 0.5)",
  rock: "rgba(184, 160, 56, 0.5)",
  ghost: "rgba(112, 88, 152, 0.5)",
  dragon: "rgba(112, 56, 248, 0.5)",
  dark: "rgba(112, 88, 72, 0.5)",
  steel: "rgba(184, 184, 208, 0.5)",
  fairy: "rgba(238, 153, 172, 0.5)"
};

export const generations = [
    { id: 1, name: "Generation I", region: "Kanto" },
    { id: 2, name: "Generation II", region: "Johto" },
    { id: 3, name: "Generation III", region: "Hoenn" },
    { id: 4, name: "Generation IV", region: "Sinnoh" },
    { id: 5, name: "Generation V", region: "Unova" },
    { id: 6, name: "Generation VI", region: "Kalos" },
    { id: 7, name: "Generation VII", region: "Alola" },
    { id: 8, name: "Generation VIII", region: "Galar" },
    { id: 9, name: "Generation IX", region: "Paldea" }
];