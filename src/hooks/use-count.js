import { useCallback } from "react";
import { useState } from "react";

export function useCount({ min = 0, max = 10, initialState = 0, step = 1 }) {
  const [amount, setAmount] = useState(initialState);

  const increment = useCallback(
    () => setAmount((currentAmount) => currentAmount - step > min ? currentAmount - step : min ),
    [step]
  );

  const decrement = useCallback(
    () => setAmount((currentAmount) => currentAmount + step < max ? currentAmount + step : max),
    [step]
  );

  return {
    amount,
    increment,
    decrement,
  };
}