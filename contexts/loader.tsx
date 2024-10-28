"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type LoaderContextType = {
  appLoader: boolean;
  setAppLoader: Function;
};
const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

type ContextProviderProps = {
  children: React.ReactNode;
};

export function AppLoaderContextProvider({
  children,
}: PropsWithChildren<ContextProviderProps>) {
  const [loader, setLoader] = useState(false);
  return (
    <LoaderContext.Provider
      value={{
        appLoader: loader,
        setAppLoader: setLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useAppLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error(
      "useAppLoader must be used within an AppLoaderContextProvider"
    );
  }
  return context;
}
