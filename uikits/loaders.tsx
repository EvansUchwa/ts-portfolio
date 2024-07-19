"use client";
import { useAppLoader } from "@/contexts/loader";
import React from "react";
import { SvgSpinnersWifi } from "./icons";

function AppLoader() {
  const { appLoader } = useAppLoader();

  if (!appLoader) return;
  return (
    <section className="appLoader notranslate">
      <SvgSpinnersWifi />
      <h1>Evans Djossouvi</h1>
    </section>
  );
}

export default AppLoader;
