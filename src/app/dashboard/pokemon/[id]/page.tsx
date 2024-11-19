import type { Pokemon } from "@/libs";
import { Metadata } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id: paramId } = await params;
    const { id, name } = await getPokemonById(paramId);

    return {
      title: `|Pokemon#${id}| ${name}`,
      description: `Pokemon Page ${name}`,
    };
  } catch {
    return {
      title: "Pokemon Page",
      description: "Pokemon Page Description",
    };
  }
}

const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      // cache: "force-cache", // Change in future
      // next: { revalidate: 60 * 60 * 30 * 6 },
    });
    const pokemon = await res.json();

    return pokemon;
  } catch {
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const { id: paramId } = await params;
  const pokemon = await getPokemonById(paramId);
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <div className="flex flex-wrap gap-2 uppercase">
              {pokemon.moves.map((move) => (
                <span
                  key={move.move.name}
                  className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-600 dark:text-white"
                >
                  {move.move.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
