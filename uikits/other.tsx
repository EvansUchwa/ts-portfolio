"use client";
import {
  ButtonPropsType,
  CustomSelectOptionType,
  CustomSelectPropsType,
  LinkButtonPropsType,
  SectionTitlePropsType,
} from "@/types/others";
import React, { useEffect, useState } from "react";

export function SectionTitle({ title }: SectionTitlePropsType) {
  return (
    <h1 className="sectionTitle">
      <sup>{title} </sup>
      {title}
    </h1>
  );
}

export function Button({ text, isOutline }: ButtonPropsType) {
  return (
    <button className={"btnStyle " + (isOutline && "btnOulineStyle")}>
      {text}
    </button>
  );
}
export function LinkButton({
  text,
  isOutline,
  link,
  ...rest
}: LinkButtonPropsType) {
  return (
    <a
      href={link}
      className={"btnStyle " + (isOutline && " btnOulineStyle")}
      {...rest}
    >
      {text}
    </a>
  );
}

export function CustomSelect({
  chooseLabel,
  options,
  afterChange,
}: CustomSelectPropsType) {
  const [currentOption, setCO] = useState<string | null>(null);
  const [currentOptionId, setCOI] = useState<number>(0);
  const [optionsVisible, setOV] = useState<boolean>(false);
  function handleChange(item: CustomSelectOptionType, i: number) {
    setCO(item.value);
    setCOI(i);
    setOV(false);
  }

  useEffect(() => {
    if (currentOption) {
      afterChange(currentOption);
    }
  }, [currentOption]);
  return (
    <div className="customSelect">
      {/* <p onClick={() => setOV((prev) => !prev)}>
        {currentOption ? options[currentOptionId].label : chooseLabel}{" "}
      </p> */}
      <p onClick={() => setOV((prev) => !prev)}>
        {chooseLabel +
          (currentOption ? ": " + options[currentOptionId].label : "")}
      </p>
      {optionsVisible && (
        <ul>
          {options.map((item, i) => (
            <li
              key={"option nb" + i}
              onClick={() => handleChange(item, i)}
              className={currentOption == item.value ? "selected" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
