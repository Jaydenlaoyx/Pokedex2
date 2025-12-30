import { type Pokemon, typeColors, typeGlowColors } from "../data/pokemon";
import '../styles/PokemonCard.css';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

export function PokemonCard({ pokemon, onClick }:PokemonCardProps) {

    const primaryType = pokemon.types[0];

    return (
        <div 
            onClick={onClick}
            className="pokemonCard"
            >

            {/* Pokemon image */}
            <div className="pokemonImageContainer" style={{background: `linear-gradient(135deg, ${typeGlowColors[primaryType]}, transparent)`}}>
                <img 
                    className="pokemonImage"
                    src={pokemon.sprite}
                    alt={pokemon.name}
                />
                <div className="pokemonImageGlow" style={{ backgroundColor: typeColors[primaryType] }}></div>
             </div>

             {/* Pokemon Info */}
             <div className="pokemonInfoContainer">
                <div className="pokemonInfoTextContainer">
                    <div className="pokemonInfotext">
                        #{pokemon.id.toString().padStart(3, '0')}
                    </div>
                    <div className="pokemonInfotext">
                        Gen {pokemon.generation}
                    </div>
                    <h3 className="pokemonName">
                        {pokemon.name}
                    </h3>
                    <div className="pokemonCardTypesContainer">
                        {pokemon.types.map((type) => (
                            <span 
                                key={type}
                                className="pokemonTypesBadge"
                                style={{ 
                                    backgroundColor: `${typeColors[type]}80`,
                                    border: `1px solid ${typeColors[type]}`,
                                }}
                            >
                                <span className="pokemonTypesText">{type}</span>
                            </span>
                        ))}
                    </div>
                </div>
             </div>

        </div>
    );
}