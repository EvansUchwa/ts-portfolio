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
    { name: "NextJs", icon: "next" },
    { name: "NodeJs", icon: "node" },
    { name: "Php", icon: "php" },
    { name: "Prisma", icon: "prisma" },
    { name: "MongoDb", icon: "mongo" },
    { name: "MySql", icon: "mysql" },
    { name: "Postgresql", icon: "postgresql" },
    { name: "Redis", icon: "redis" },
    { name: "RabbitMq", icon: "rabbitmq" },
    { name: "Github", icon: "github" },
    { name: "Gitlab", icon: "gitlab" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
    { name: "Heroku", icon: "heroku" },
  ];

  const frontEndTool = [
    techno[0],
    techno[1],
    techno[2],
    techno[3],
    techno[4],
    techno[5],
    techno[6],
  ];

  const backendTool = [
    techno[7],
    techno[8],
    techno[9],
    techno[10],
    techno[11],
    techno[12],
    techno[13],
    techno[14],
  ];

  const devopsTools = [
    { name: "Github", icon: "github" },
    { name: "Gitlab", icon: "gitlab" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
    { name: "Heroku", icon: "heroku" },
  ];

  return (
    <div className="home-skill" id="home-skill">
      <SectionTitle title={"Mes outils Front-end"} />

      <div className="skillList">
        {frontEndTool.map((item, i) => (
          <article key={"front techno nb" + i} className="notranslate">
            {technosIcons[item.icon]}
            <b>{item.name} </b>
          </article>
        ))}
      </div>

      <br />
      <br />
      <SectionTitle title={"Mes outils Back-end"} />

      <div className="skillList">
        {backendTool.map((item, i) => (
          <article key={"back techno nb" + i} className="notranslate">
            {technosIcons[item.icon]}
            <b>{item.name} </b>
          </article>
        ))}
      </div>

      <br />
      <br />

      <SectionTitle title={"Mes outils Devops"} />

      <div className="skillList">
        {devopsTools.map((item, i) => (
          <article key={"devops techno nb" + i} className="notranslate">
            {technosIcons[item.icon]}
            <b>{item.name} </b>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HomeSkills;
