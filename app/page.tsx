"use client";
import HomeAbout from "@/pageComponents/home/about";
import HomeBanner from "@/pageComponents/home/banner";
import HomeContact from "@/pageComponents/home/contact";
import HomeSkills from "@/pageComponents/home/skills";
import HomeWorks from "@/pageComponents/home/works";
import { useEffect } from "react";
import ParticlesBg from "particles-bg";

export default function Home() {
  useEffect(() => {
    var isCursorInited = false;
    const customCursor = document.querySelector(
      ".customCursor"
    ) as HTMLDivElement;

    function initCursor() {
      customCursor.classList.add("customCursorInit");
      isCursorInited = true;
    }
    function destroyCursor() {
      customCursor.classList.remove("customCursorInit");
      isCursorInited = false;
    }

    let allLinks = document.querySelectorAll("a,font,.navBtn,button");

    allLinks.forEach((element) => {
      element.addEventListener("mouseover", (e: Event) => {
        let link = e.target as HTMLLinkElement;
        link.style.cssText = `letter-spacing: 6px;`;
        customCursor.classList.add("customCursorHoveredLink");
      });

      element.addEventListener("mouseout", (e) => {
        let link = e.target as HTMLLinkElement;
        link.style.cssText = `letter-spacing: initial;`;
        customCursor.classList.remove("customCursorHoveredLink");
      });
    });

    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      if (!isCursorInited) {
        initCursor();
      }
      customCursor.style.cssText = `translate: ${mouseX}px ${mouseY}px`;
    });

    document.addEventListener("mouseout", destroyCursor);
  }, []);

  return (
    <>
      <ParticlesBg type="cobweb" bg={true} color="#121A33" num={50} />
      <div className="home">
        <HomeBanner />
        <HomeAbout />
        <HomeSkills />
        <HomeWorks />
        <HomeContact />
      </div>
    </>
  );
}
