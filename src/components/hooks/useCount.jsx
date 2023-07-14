import { useState } from "react";

export const useCount = (initial) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(initial);
  };

  return { count, decrement, increment, reset };
};
