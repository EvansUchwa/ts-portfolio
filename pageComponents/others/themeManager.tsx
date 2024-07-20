"use client";
import { IcBaselineLightMode, IcBaselineModeNight } from "@/uikits/icons";
import React, { useEffect, useState } from "react";

function getDefaultTheme() {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("edsv-theme")
      ? window.localStorage.getItem("edsv-theme")
      : "light";
  }
}
function ThemeManager() {
  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    if (theme == "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    if (typeof window !== "undefined") {
      if (document.documentElement.classList.contains("dark")) {
        window.localStorage.setItem("edsv-theme", "light");
        setTheme("light");
      } else {
        window.localStorage.setItem("edsv-theme", "dark");
        setTheme("dark");
      }
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
