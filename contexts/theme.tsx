"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

function getDefaultTheme() {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("edsv-theme");
    if (storedTheme) {
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      return storedTheme;
    }
    return "light";
  }
  return "light";
}
type LoaderContextType = {
  theme: string;
  toggleTheme: Function;
};
const ThemeContext = createContext<LoaderContextType | undefined>(undefined);

type ContextProviderProps = {
  children: React.ReactNode;
};

export function AppThemeContextProvider({
  children,
}: PropsWithChildren<ContextProviderProps>) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(getDefaultTheme()!);
  }, []);

  function toggleTheme() {
    if (typeof window !== "undefined") {
      if (document.documentElement.classList.contains("dark")) {
        window.localStorage.setItem("edsv-theme", "light");
        setTheme("light");
      } else {
        window.localStorage.setItem("edsv-theme", "dark");
        setTheme("dark");
      }
      document.documentElement.classList.toggle("dark");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useAppLoader must be used within an AppLoaderContextProvider"
    );
  }
  return context;
}
