"use client";
import { useState } from "react";
import {
  IcBaselineFactCheck,
  IcBaselineLocalPhone,
  IcBaselineLocationOn,
  IcBaselineMail,
  IcBaselineWhatsapp,
  IcOutlineMail,
  MdiGithub,
  MdiLinkedin,
} from "../../uikits/icons";
import { SectionTitle } from "../../uikits/other";
import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import { ContactFormFieldsType } from "@/types/form";
import { contactFormFields } from "@/helpers/form/fieldsArrays";
import FormikFieldProvider from "@/uikits/form";
import { FormBtn } from "@/uikits/buttons";
import { ContactValidation } from "@/helpers/form/validations";
import { toast } from "sonner";

const HomeContact = () => {
  const formik = useFormik<ContactFormFieldsType>({
    initialValues: {
      fullname: "",
      message: "",
      email: "",
    },
    onSubmit: handleSubmit,
    validateOnMount: true,
    validationSchema: ContactValidation,
  });

  const [messageSent, setMessageSent] = useState(false);
  const [hideConfetti, setHC] = useState<boolean>(false);

  const { isValid, isSubmitting, setSubmitting } = formik;

  function handleSubmit(formValues: ContactFormFieldsType) {
    axios
      .post("/api/contact", {
        message: getMsgToSent(formValues),
        email: formValues.email,
      })
      .then((res) => {
        setMessageSent(true);
        toast.success("Youpi!");
      })
      .catch((err) => toast.error("Une erreur est survenue!"))
      .finally(() => setSubmitting(false));
  }

  function getMsgToSent(formValues: ContactFormFieldsType): string {
    return (
      "Bonjour! Je suis Monsieur/Madame " +
      formValues.fullname +
      " et c'est en ayant consulté votre portfolio que je vous contact:" +
      formValues.message
    );
  }
  return (
    <div className="home-contact" id="home-contact">
      <section className="cp-infos">
        <SectionTitle title={"Contact"} />
        <div>
          <p>
            <span>
              <IcBaselineLocationOn />
            </span>
            Cotonou , Bénin a Godomey
          </p>
          <p>
            <span>
              <IcBaselineMail />
            </span>
            johnsonevans686@gmail.com
          </p>
          <p>
            <span>
              <IcBaselineLocalPhone />
            </span>
            +229 94677352
          </p>
        </div>
        <section>
          <a href="https://github.com/EvansUchwa">
            <MdiGithub />
          </a>
          <a href="mailto:johnsonevans686@gmail.com">
            <IcOutlineMail />
          </a>
          <a
            href="https://wa.me/22994677352"
            target="_blank"
            className=" whatsappColor"
          >
            <IcBaselineWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/evans-djossouvi-5b81101b0"
            target="_blank"
            className=" whatsappColor"
          >
            <MdiLinkedin />
          </a>
        </section>
      </section>

      {messageSent ? (
        <>
          <section className="cp-messageSent">
            <IcBaselineFactCheck />
            <h2>Merci beaucoup pour votre prise de contact !</h2>
            <p>Je m'efforcerai de vous répondre dans les plus brefs délais.</p>
            <button
              onClick={() => {
                setMessageSent(false);
                setHC(false);
              }}
            >
              J'ai compris
            </button>
          </section>
        </>
      ) : (
        <section className="cp-form">
          <FormikProvider value={formik}>
            <Form>
              {contactFormFields.map((item, i) => (
                <FormikFieldProvider {...item} key={"contact field nb " + i} />
              ))}
              <FormBtn
                text={isSubmitting ? "..." : "Envoyer"}
                isValid={isSubmitting ? false : isValid}
              />
            </Form>
          </FormikProvider>
        </section>
      )}
    </div>
  );
};

export default HomeContact;
