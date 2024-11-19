import Image from "next/image";
import Link from "next/link";
import { IoHeart } from "react-icons/io5";
import type { IPokemon } from "@/libs";

export const PokemonCard = ({ id, name }: IPokemon) => {
  return (
    <div className="max-w-sm bg-slate-950/80 border border-gray-200 rounded-lg shadow min-w-[200px] min-h-[200px]">
      <Link
        href={`/dashboard/pokemon/${id}`}
        className="flex flex-col justify-center items-center gap-4 p-4"
      >
        <p className="text-sm font-bold tracking-tight text-white text-center">
          {name}
        </p>
        <Image
          className="rounded-t-lg max-h-[100px]"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
          width={100}
          height={100}
          priority={false}
        />
        <button
          type="button"
          className="text-white border bg-slate-800/80 font-medium rounded-lg text-sm px-2 py-1.5 text-center"
        >
          More Details
        </button>
      </Link>
      <Link href="/dashboard/main">
        <div className="bg-white p-4 py-2">
          <div className="inline-flex items-center gap-2">
            <div className="text-red-700">
              <IoHeart />
            </div>
            <p className="text-slate-900 font-bold text-sm">Not Favorite</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
