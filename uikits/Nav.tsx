"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PhListLight, PhX } from "./icons";

export const AsideNav = () => {
  const [navOpened, setOpened] = useState(false);
  function handleMenu(event?: React.MouseEvent) {
    document
      .querySelector(".containerVisible")
      ?.classList.toggle("containerVisibleRotate");
    setOpened((prev) => !prev);
  }
  function onMenuLinkClick(event: React.MouseEvent): void {
    const target = event.target as HTMLSpanElement;
    const targetId = target.id;
    handleMenu();
    setTimeout(
      () => document.querySelector("." + targetId)?.scrollIntoView(),
      500
    );
  }
  return (
    <>
      <div className="containerHided">
        <section className="chNavLink">
          <span id="home-banner" className="navBtn" onClick={onMenuLinkClick}>
            Accueil
          </span>
          <span id="home-about" className="navBtn" onClick={onMenuLinkClick}>
            A propos
          </span>
          <span id="home-skill" className="navBtn" onClick={onMenuLinkClick}>
            Compétences
          </span>
          <span id="home-work" className="navBtn" onClick={onMenuLinkClick}>
            Travaux
          </span>
          <span id="home-contact" className="navBtn" onClick={onMenuLinkClick}>
            Contact
          </span>
        </section>
      </div>
      <aside className="fixedAsideNav" onClick={(event) => handleMenu(event)}>
        {navOpened ? <PhX /> : <PhListLight />}
      </aside>
    </>
  );
};

export const TopNav = () => {
  return (
    <section className="pageHeader">
      <div className="logo">
        <Link href="/">E-Dev.</Link>
      </div>
    </section>
  );
};
