import { technosIcons } from "@/helpers/others";
import { SectionTitle } from "../../uikits/other";

const HomeSkills = () => {
  const techno = [
    { name: "Html5", icon: "html" },
    { name: "Css3", icon: "css" },
    { name: "Sass", icon: "sass" },
    { name: "Php", icon: "php" },
    { name: "Javascript", icon: "js" },
    { name: "Typescript", icon: "ts" },
    { name: "React", icon: "react" },
    { name: "NodeJs", icon: "node" },
    { name: "NextJs", icon: "next" },
    { name: "MongoDb", icon: "mongo" },
    { name: "MySql", icon: "mysql" },
    { name: "Postgresql", icon: "postgresql" },
    { name: "Prisma", icon: "prisma" },
    { name: "Github", icon: "github" },
    { name: "Gitlab", icon: "gitlab" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
    { name: "Heroku", icon: "heroku" },
  ];

  return (
    <div className="home-skill" id="home-skill">
      <SectionTitle title={"Mes outils"} />

      <div className="skillList">
        {techno.map((item, i) => (
          <article key={"techno nb" + i} className="notranslate">
            {technosIcons[item.icon]}
            <b>{item.name} </b>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HomeSkills;
