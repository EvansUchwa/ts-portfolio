"use client";
import { Typewriter } from "react-simple-typewriter";
import { LinkButton } from "../../uikits/other";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { particleOption } from "@/helpers/rawdata";

const HomeBanner = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => particleOption, []);

  return (
    <div className="home-banner">
      <div className="hb-presentation">
        <section className="hbp-text">
          <section>
            {init && (
              <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
              />
            )}
            <h1>Evans Djossouvi</h1>
            <b>
              Développeur Web <br />{" "}
              <Typewriter
                words={["Front-end", "Back-end"]}
                loop={false}
                cursor
                cursorStyle="</>"
                typeSpeed={250}
                deleteSpeed={80}
                delaySpeed={1000}
              />
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
              target="_blank"
              link={process.env.resumeUrl!}
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
