import type { IPokemon, IPokemonResponse } from "@/libs";
import { PokemonGrid } from "@/pokemons";
import { Metadata } from "next";

const getPokemons = async (limit = 20, offset = 0): Promise<IPokemon[]> => {
  const response = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: Promise<IPokemonResponse> = (await response).json();

  const pokemons = (await data).results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Pokemon App List",
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(200, 0);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl my-2 text-center mb-4 inline-flex items-center justify-center gap-2">
          Pokemons List
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Dark
          </span>
        </h1>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </>
  );
}
