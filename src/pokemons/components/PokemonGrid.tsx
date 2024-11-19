import { IPokemonGrid } from "@/libs";
import React from "react";
import { PokemonCard } from "@/pokemons";

export const PokemonGrid = ({ pokemons }: IPokemonGrid) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
};
