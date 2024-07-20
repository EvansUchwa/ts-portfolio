"use client";
import { works } from "@/helpers/rawdata";
import { CustomSelect, LinkButton, SectionTitle } from "../../uikits/other";
import Slider from "react-slick";
import { ReactElement, useState } from "react";
import { technosIcons } from "@/helpers/others";

const HomeWorks = () => {
  const [iWorks, setiW] = useState([]);
  const [finalWorks, setFW] = useState(works);

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

  function handleChange(selected: string) {
    if (selected != "all") {
      let filter = works.filter((item) => item.technos.includes(selected));
      if (filter && filter.length > 0) {
        setFW(filter);
      }
    } else {
      setFW(works);
    }
    document.querySelector(".wp-workList")?.scrollIntoView();
  }

  return (
    <div className="home-work" id="home-work">
      <SectionTitle title="Mes travaux" />
      <section>
        <CustomSelect
          chooseLabel={"Filtre par techno"}
          options={[
            { label: "Javascript(React Js)", value: "react" },
            { label: "Javascript(Next Js)", value: "next" },
            { label: "Typescript(Next Js)", value: "ts" },
            { label: "Node Js", value: "node" },
            { label: "Toutes les technos", value: "all" },
          ]}
          afterChange={handleChange}
        />
      </section>
      <div className="wp-workList">
        <Slider {...settings}>
          {finalWorks.map((item, i) => (
            <div key={"work nb " + i} className="workCardContainer">
              <article
                className="workCard"
                style={{
                  backgroundImage: "url(" + "/img/" + item.img + ")",
                }}
              >
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
