import { useState } from "react";
export type chosenTypes = {
  dough?: string;
  bread?: string;
  sauces?: string;
  meat?: string;
  cheese?: string;
};
export type addedTypes = {
  vegetables?: string[];
  pickles?: string[];
  ["Sauces and condiments"]?: string[];
  spices?: string[];
  special?: string[];
  cheese?: string[];
  meats?: string[];
};
function useMakeFood() {
  const [isBurger, setIsBurger] = useState(false);
  const [isPizza, setIsPizza] = useState(false);

  return {
    isBurger,
    isPizza,
    setIsPizza,
    setIsBurger,
  };
}
export default useMakeFood;
