import {
  FormikErrorMessagePropsType,
  FormikFieldProviderPropsType,
} from "@/types/form";
import React from "react";
import {
  FormikEmailInput,
  FormikTextAreaInput,
  FormikTextInput,
} from "./inputsType/text";
import { ErrorMessage } from "formik";

function FormikFieldProvider(props: FormikFieldProviderPropsType) {
  const { fieldType } = props;
  if (fieldType == "text") {
    return <FormikTextInput {...props} />;
  } else if (fieldType == "textarea") {
    return <FormikTextAreaInput {...props} />;
  } else if (fieldType == "email") {
    return <FormikEmailInput {...props} />;
  }
}

export function FormikErrorMessage({ name }: FormikErrorMessagePropsType) {
  return (
    <span className="formikErrorMessage">
      <ErrorMessage name={name} />
    </span>
  );
}

export default FormikFieldProvider;
