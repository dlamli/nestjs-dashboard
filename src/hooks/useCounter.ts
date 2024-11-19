import { useState } from "react";

export const useCounter = (initialNumber: number) => {
  const [counter, setCounter] = useState(initialNumber);

  const handleIncrease = (prevCounter: number) => setCounter(prevCounter + 1);
  const handleDecrease = (prevCounter: number) =>
    counter <= 0 ? setCounter(0) : setCounter(prevCounter - 1);
  const handleReset = () => setCounter(0);

  return {
    counter,
    handleIncrease,
    handleDecrease,
    handleReset,
  };
};
