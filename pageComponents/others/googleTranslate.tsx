"use client";
import { LanguageSelectorPropsType } from "@/types/others";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useAppLoader } from "@/contexts/loader";
import { CircleFlagsEn, CircleFlagsFr } from "@/uikits/icons";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const languages = [
  {
    label: <CircleFlagsFr />,
    value: "fr",
    src: "https://flagcdn.com/h60/fr.png",
  },
  {
    label: <CircleFlagsEn />,
    value: "en",
    src: "https://flagcdn.com/h60/us.png",
  },
];

const includedLanguages = languages.map((lang) => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
    },
    "google_translate_element"
  );
}

export function GoogleTranslate() {
  const { setAppLoader } = useAppLoader();
  const [langCookie, setLangCookie] = useState(
    decodeURIComponent(getPrefLangCookie())
  );

  useEffect(() => {
    let timeoutId: string | any | undefined;
    window.googleTranslateElementInit = googleTranslateElementInit;
    const observer = new MutationObserver((mutationsList, observer) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        observer.disconnect();
        setAppLoader(false);
      }, 600);
    });

    const targetNode = document.querySelector("html");

    if (targetNode) {
      observer.observe(targetNode, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
    return () => observer.disconnect();
  }, [langCookie]);

  const onChange = (value: string) => {
    let lang;
    if (value == "en") {
      lang = "/en/en";
      setCookie("googtrans", "/en/en");
    } else {
      lang = "/fr/fr";
    }
    const element = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    element.value = value;
    element.dispatchEvent(new Event("change"));
    setLangCookie(lang);
  };

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}
      ></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

function LanguageSelector({ onChange, value }: LanguageSelectorPropsType) {
  const langCookie = value.split("/")[2];
  const { appLoader, setAppLoader } = useAppLoader();

  if (appLoader) return null;
  return (
    <div id="langSelector" className="notranslate">
      {languages.map((it) => (
        <span
          key={it.value}
          onClick={(e) => {
            setAppLoader(true);
            onChange(it.value);
          }}
          className={langCookie == it.value ? "isActive" : ""}
        >
          {it.label}
        </span>
      ))}
    </div>
  );
}

export function getPrefLangCookie(): string {
  if (!getCookie("googtrans")) {
    setCookie("googtrans", "/en/en");
  }
  return getCookie("googtrans") ?? "en";
}
