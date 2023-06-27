import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
interface Context {
  isOrder: boolean;
  setIsOrder: Dispatch<SetStateAction<boolean>>;
  reservation: boolean;
  setReservation: Dispatch<SetStateAction<boolean>>;
  cat:
    | "pizza"
    | "meal"
    | "salad"
    | "sweet"
    | "fastFood"
    | "breakFast"
    | "drinks";
  setCat: Dispatch<
    SetStateAction<
      "pizza" | "meal" | "salad" | "sweet" | "fastFood" | "breakFast" | "drinks"
    >
  >;
  serverResponse: undefined | { content: string; type: string };
  setServerResponse: Dispatch<
    SetStateAction<
      | {
          content: string;
          type: string;
        }
      | undefined
    >
  >;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
}
const context = createContext<Context>({
  reservation: false,
  setReservation: () => {},
  isOrder: false,
  setIsOrder: () => {},
  loader: false,
  setLoader: () => {},
  toggle: false,
  setToggle: () => {},
  cat: "breakFast",
  setCat: () => {},
  serverResponse: undefined,
  setServerResponse: () => {},
});
export const Provider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const [reservation, setReservation] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [loader, setLoader] = useState(false);
  const [serverResponse, setServerResponse] = useState<
    undefined | { content: string; type: string }
  >(undefined);
  const [cat, setCat] = useState<
    "pizza" | "meal" | "salad" | "sweet" | "fastFood" | "breakFast" | "drinks"
  >("breakFast");
  return (
    <context.Provider
      value={{
        reservation,
        setReservation,
        cat,
        setCat,
        serverResponse,
        setServerResponse,
        isOrder,
        setIsOrder,
        setToggle,
        toggle,
        loader,
        setLoader,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const UseContext = () => useContext(context);
