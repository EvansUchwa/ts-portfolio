import { technosIcons } from "@/helpers/others";
import { SectionTitle } from "../../uikits/other";

const HomeSkills = () => {
  const techno = [
    { name: "Html5", icon: "html" },
    { name: "Css3", icon: "css" },
    { name: "Sass", icon: "sass" },
    { name: "Javascript", icon: "js" },
    { name: "Typescript", icon: "ts" },
    { name: "React", icon: "react" },
    { name: "Node Js", icon: "node" },
    { name: "Next Js", icon: "next" },
    { name: "Mongo Db", icon: "mongo" },
    { name: "MySql", icon: "mysql" },
    { name: "Github", icon: "github" },
    { name: "Gitlab", icon: "gitlab" },
    { name: "Vercel", icon: "vercel" },
    { name: "Heroku", icon: "heroku" },
  ];
  return (
    <div className="home-skill">
      <SectionTitle title={"Mes outils"} />
      <div className="skillList">
        {techno.map((item, i) => (
          <article key={"techno nb" + i}>
            {technosIcons[item.icon]}
            <b>{item.name} </b>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HomeSkills;
