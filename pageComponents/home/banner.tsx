"use client";
import { Typewriter } from "react-simple-typewriter";
import { LinkButton } from "../../uikits/other";
import { redirectToResume } from "@/helpers/others";

const HomeBanner = () => {
  return (
    <div className="home-banner" id="home-banner">
      <div className="hb-presentation">
        <section className="hbp-text">
          <section>
            <h1>Evans Djossouvi</h1>
            <b>
              Développeur Web <br />{" "}
              <strong className="notranslate">
                <Typewriter
                  words={["Front-end", "Back-end"]}
                  loop={false}
                  cursor
                  cursorStyle="<>"
                  typeSpeed={250}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </strong>
              .
            </b>
          </section>

          <section className="hpp-contactBtn">
            <LinkButton
              text={"Me contacter"}
              link={"mailto:johnsonevans686@gmail.com"}
            />
            <LinkButton
              text={"Mon CV"}
              isOutline={true}
              link={"#"}
              onClick={() => redirectToResume()}
            />
          </section>
        </section>

        <section className="hbp-image">
          <img src={"/img/metable.webp"} />
        </section>
      </div>
    </div>
  );
};

export default HomeBanner;
