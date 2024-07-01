"use client";
import { Typewriter } from "react-simple-typewriter";
import { LinkButton } from "../../uikits/other";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HomeBanner = () => {
  const [init, setInit] = useState(false);

  // useEffect(() => {
  //     initParticlesEngine(async (engine) => {
  //         await loadSlim(engine);
  //     }).then(() => {
  //         setInit(true);
  //     });
  // }, []);

  // const options = useMemo(
  //     () => ({
  //         background: {
  //             color: {
  //                 value: "transparent",
  //             },
  //         },
  //         fpsLimit: 120,
  //         interactivity: {
  //             events: {
  //                 onClick: {
  //                     enable: true,
  //                     mode: "push",
  //                 },
  //                 onHover: {
  //                     enable: true,
  //                     mode: "repulse",
  //                 },
  //             },
  //             modes: {
  //                 push: {
  //                     quantity: 4,
  //                 },
  //                 repulse: {
  //                     distance: 200,
  //                     duration: 0.4,
  //                 },
  //             },
  //         },
  //         particles: {
  //             color: {
  //                 value: "#121A33",
  //             },
  //             links: {
  //                 color: "#121A33",
  //                 distance: 150,
  //                 enable: true,
  //                 opacity: 0.5,
  //                 width: 1,
  //             },
  //             move: {
  //                 direction: "none",
  //                 enable: true,
  //                 outModes: {
  //                     default: "bounce",
  //                 },
  //                 random: false,
  //                 speed: 3,
  //                 straight: false,
  //             },
  //             number: {
  //                 density: {
  //                     enable: true,
  //                 },
  //                 value: 80,
  //             },
  //             opacity: {
  //                 value: 0.5,
  //             },
  //             shape: {
  //                 type: "circle",
  //             },
  //             size: {
  //                 value: { min: 1, max: 5 },
  //             },
  //         },
  //         detectRetina: true,
  //     }),
  //     [],
  // );

  return (
    <div className="home-banner">
      <div className="hb-presentation">
        <section className="hbp-text">
          <section>
            {/* {
                        init && <Particles
                            id="tsparticles"
                            particlesLoaded={particlesLoaded}
                            options={options}
                        />

                    } */}
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
              link={"/cv.pdf"}
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
