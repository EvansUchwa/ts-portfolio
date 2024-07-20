"use client";
import { useAppLoader } from "@/contexts/loader";
import React from "react";
import { SvgSpinnersWifi } from "./icons";
import { useAppTheme } from "@/contexts/theme";

function AppLoader() {
  const { appLoader } = useAppLoader();
  const { theme } = useAppTheme();

  if (!appLoader) return;
  return (
    <section
      className="appLoader notranslate"
      style={{
        backgroundColor: theme == "light" ? "#ffffff10" : "#00000010",
      }}
    >
      <SvgSpinnersWifi />
      <h1>Evans Djossouvi</h1>
    </section>
  );
}

export default AppLoader;
