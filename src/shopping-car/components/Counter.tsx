"use client";

import { useCounter } from "@/hooks";
import { ICounter } from "@/libs";

export const Counter = ({ value = 0 }: ICounter) => {
  const { counter, handleDecrease, handleIncrease, handleReset } =
    useCounter(value);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => handleIncrease(counter)}
          className="flex items-center justify-center p-2 px-6 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
        >
          +1
        </button>
        <button
          onClick={() => handleDecrease(counter)}
          className="flex items-center justify-center p-2 px-6 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
        >
          -1
        </button>
        <button
          onClick={handleReset}
          className="flex items-center justify-center p-2 px-6 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
        >
          Reset
        </button>
      </div>
    </>
  );
};
