"use client";
import { IcBaselineLightMode, IcBaselineModeNight } from "@/uikits/icons";
import React, { useEffect, useState } from "react";

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
function ThemeManager() {
  const [theme, setTheme] = useState<string>("");

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
    <div className="themeManager">
      <div className="themeToggler">
        <section onClick={toggleTheme} className={theme + "-defTheme"}>
          <small></small>

          <span className="lightIcon">
            <IcBaselineLightMode />
          </span>
          <span className="darkIcon">
            <IcBaselineModeNight />
          </span>
        </section>
      </div>
    </div>
  );
}

export default ThemeManager;
