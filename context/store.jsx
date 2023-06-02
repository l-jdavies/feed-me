"use client";

import {
  createContext,
  useContent,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <GlobalContext.Provider value={{searchTerm, setSearchTerm}}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext)