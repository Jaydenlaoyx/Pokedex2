import './App.css'
import { PokemonCard } from "./components/PokemonCard";
import { PokemonPage } from './components/PokemonPage';
import { pokemonData } from "./data/pokemon";
import type { Pokemon } from "./data/pokemon";
import { useState } from "react";

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterGeneration, setFilterGeneration] = useState<number | "all">("all");

  const filteredPokemon = pokemonData.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || pokemon.types.includes(filterType);
    const matchesGeneration = filterGeneration === "all" || pokemon.generation === filterGeneration;
    return matchesSearch && matchesType && matchesGeneration;
  });

  return (
    <>
      <div className='title gradientText'>POKÉDEX</div>

      {/* Search Bar*/}
      <div className='searchBarContainer'>
        <search className='searchBar'>
          <input 
            className='searchInput'
            type='text'
            placeholder="Search by Pokemon name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            >
          </input>
        </search>
      </div>

      {/* Pokemon Grid */}
      {filteredPokemon.length > 0 ? (  
        <div className='filteredPokemonContainer'>
          {filteredPokemon.map(pokemon => (
            <PokemonCard 
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => setSelectedPokemon(pokemon)}
            />))}
        </div>) : (<p>No Pokemon in Database</p>)
      }

      {/* Pokemon Page */}
      {selectedPokemon && (
        <PokemonPage 
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </>
  )
}

export default App
