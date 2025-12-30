import { type Pokemon } from "../data/pokemon";

interface PokemonPageProps {
    pokemon: Pokemon
    onClose: () => void;
}

export function PokemonPage( {pokemon}: PokemonPageProps ) {

    const primaryType: string = pokemon.types[0];

    return (
        <>
            <div>{pokemon.name}</div>
            <div>{pokemon.types.map((type) => (
                <span>{type}</span>
            ))}</div>
        </>
    );
}