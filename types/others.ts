import React, { ReactElement } from "react"

export type SectionTitlePropsType = {
    title: string
}
export type ButtonPropsType = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    text: string
    isOutline?: boolean
}

export type LinkButtonPropsType = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    text: string
    isOutline?: boolean
    link: string
}

export type technosIconType = {
    [k: string]: ReactElement,
}

export type WorkType = {
    name: string,
    description: string,
    img: string,
    link: string,
    technos: string[],
}

export type CustomSelectOptionType = {
    label: string;
    value: string;
};
export type CustomSelectPropsType = {
    chooseLabel: string;
    options: CustomSelectOptionType[];
    afterChange: Function;
};