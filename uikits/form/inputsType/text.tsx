import { FormikTextInputPropsType } from "@/types/form";
import { Field } from "formik";
import React from "react";
import { FormikErrorMessage } from "..";

export function FormikTextInput(props: FormikTextInputPropsType) {
  const { name, fieldType, label, semi, ph } = props;
  return (
    <div className={"formikInput " + (semi ?? " fiSemi ")}>
      {label && <label>{label} </label>}
      <Field type={fieldType} name={name} placeholder={ph} />
      <FormikErrorMessage name={name} />
    </div>
  );
}

export function FormikTextAreaInput(props: FormikTextInputPropsType) {
  const { name, fieldType, label, semi, ph } = props;
  return (
    <div className={"formikInput " + (semi ?? " fiSemi ")}>
      {label && <label>{label} </label>}
      <Field component="textarea" name={name} placeholder={ph} />
      <FormikErrorMessage name={name} />
    </div>
  );
}

export function FormikEmailInput(props: FormikTextInputPropsType) {
  const { name, fieldType, label, semi, ph } = props;
  return (
    <div className={"formikInput " + (semi ?? " fiSemi ")}>
      {label && <label>{label} </label>}
      <Field type={"email"} name={name} placeholder={ph} />
      <FormikErrorMessage name={name} />
    </div>
  );
}
