"use client";
import React, { useState } from "react";
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
    const targetId = target.getAttribute("datatype") as string;
    handleMenu();
    setTimeout(() => {
      document
        .getElementById(targetId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
    }, 1000);
  }
  return (
    <>
      <div className="containerHided">
        <section className="chNavLink">
          <span
            datatype="home-banner"
            className="navBtn"
            onClick={onMenuLinkClick}
          >
            Accueil
          </span>
          <span
            datatype="home-about"
            className="navBtn"
            onClick={onMenuLinkClick}
          >
            A propos
          </span>
          <span
            datatype="home-skill"
            className="navBtn"
            onClick={onMenuLinkClick}
          >
            Compétences
          </span>
          <span
            datatype="home-work"
            className="navBtn"
            onClick={onMenuLinkClick}
          >
            Travaux
          </span>
          <span
            datatype="home-contact"
            className="navBtn"
            onClick={onMenuLinkClick}
          >
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
