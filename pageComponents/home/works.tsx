"use client";
import { works } from "@/helpers/rawdata";
import { LinkButton, SectionTitle } from "../../uikits/other";
import Slider from "react-slick";
import { ReactElement } from "react";
import { technosIcons } from "@/helpers/others";

const HomeWorks = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: function (i: number): ReactElement {
      return <span>{i}</span>;
    },
  };

  return (
    <div className="home-work">
      <SectionTitle title="Mes travaux" />

      <div className="wp-workList">
        <Slider {...settings}>
          {works.map((item, i) => (
            <div key={"work nb " + i} className="workCardContainer">
              <article className="workCard">
                <img src={"/img/" + item.img} alt="random" />
                <section>
                  <img src={"/img/" + item.img} alt="random" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div>
                    {item.technos.map((icon, j) => (
                      <article key={"work " + i + " techno pic nb" + j}>
                        {technosIcons[icon]}
                      </article>
                    ))}
                  </div>

                  <LinkButton
                    text={"Visitez"}
                    link={item.link}
                    target="_blank"
                  />
                </section>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeWorks;
