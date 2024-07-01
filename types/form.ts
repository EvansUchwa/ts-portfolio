import { ReactElement } from "react";

export type FormikFieldProviderPropsType = {
    fieldType: string;
    name: string;
    ph: string;
    label?: string;
    semi?: boolean;
};
export type FormikTextInputPropsType = {
    fieldType: string;
    name: string;
    label?: string;
    ph: string;
    semi?: boolean;
};

export type ContactFormFieldsType = {
    fullname: string;
    email: string;
    message: string;
};

export type FormBtnPropsType = {
    isValid: boolean;
    text: string | ReactElement;
};

export type FormikErrorMessagePropsType = {
    name: string;
};