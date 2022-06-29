import { createContext } from "react";

type PalletContext = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const CommandPalletContext = createContext<PalletContext>({
  isOpen: false,
  setIsOpen: () => {},
});
