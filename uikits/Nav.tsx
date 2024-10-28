"use client";
import React, { useState } from "react";
import { PhListLight, PhX } from "./icons";

export function onMenuLinkClick(
  event: React.MouseEvent,
  handleMenu?: any
): void {
  var etarget = event.currentTarget as HTMLSpanElement;
  var targetId = etarget.getAttribute("datatype") as string;
  handleMenu && handleMenu();
  setTimeout(() => {
    // document
    //   .getElementById(targetId)
    //   ?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "nearest",
    //     inline: "start",
    //   });
    var target = document.getElementById(targetId) as HTMLElement;
    var targetParent = document.querySelector(
      ".containerVisible"
    ) as HTMLElement;
    targetParent.scrollTop = target!.offsetTop;
  }, 1000);
}

export const AsideNav = () => {
  const [navOpened, setOpened] = useState(false);
  function handleMenu(event?: React.MouseEvent) {
    document
      .querySelector(".containerVisible")
      ?.classList.toggle("containerVisibleRotate");
    setOpened((prev) => !prev);
  }

  return (
    <>
      <div className="containerHided">
        <section className="chNavLink">
          <span
            datatype="home-banner"
            className="navBtn"
            onClick={(e) => onMenuLinkClick(e, handleMenu)}
          >
            Accueil
          </span>
          <span
            datatype="home-about"
            className="navBtn"
            onClick={(e) => onMenuLinkClick(e, handleMenu)}
          >
            A propos
          </span>
          <span
            datatype="home-skill"
            className="navBtn"
            onClick={(e) => onMenuLinkClick(e, handleMenu)}
          >
            Compétences
          </span>
          <span
            datatype="home-work"
            className="navBtn"
            onClick={(e) => onMenuLinkClick(e, handleMenu)}
          >
            Travaux
          </span>
          <span
            datatype="home-contact"
            className="navBtn"
            onClick={(e) => onMenuLinkClick(e, handleMenu)}
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
