"use client";
import { technosIconType } from "@/types/others";
import {
  SkillIconsCss,
  SkillIconsHtml,
  SkillIconsSass,
  SkillIconsJavascript,
  SkillIconsTypescript,
  SkillIconsReactDark,
  SkillIconsNextjsLight,
  SkillIconsMongodb,
  SkillIconsMysqlDark,
  SkillIconsGithubDark,
  SkillIconsVercelDark,
  SkillIconsHeroku,
  SkillIconsGitlabDark,
  SkillIconsDocker,
  SkillIconsNodejsDark,
  SkillIconsPrisma,
  SkillIconsPostgresqlDark,
  SkillIconsPhpDark,
  LogosRedis,
  LogosRabbitmqIcon,
  LogosPhp,
} from "@/uikits/icons";
import { getCookie } from "cookies-next";
// {
//     name: 'Stuud',
//     description: 'En développement- Un mini reseau social pour le partage de cours pour les etudiant',
//     img: 'stuud.webp', link: 'https://stuud-app.herokuapp.com/'
// },
// {
//     name: 'Wiki-Movie',
//     description: "Un mini site pour ajouter/modifier/liker/disliker/commenter des films," +
//         "c'est le projet parachevant ma formation GraphQL/Apollo Js",
//     img: 'graphQl.webp', link: 'https://wiki-movies.herokuapp.com/'
// },
// {
//     name: 'Pizza-Pedia',
//     description: "Une sorte de mini E-commerce de achat/livraison de pizza avec un espace admin pour le restaurateur/vendeur." +
//         "c'est le projet parachevant ma formation Next Js",
//     img: 'pizzapedia.webp', link: 'https://pizza-pedia.netlify.app/'
// }
// {
//     name: 'AnimStore',
//     description: 'Mini E-commerce sur les vêtements pour parachever ma formation React ',
//     img: 's2.webp', link: 'https://evans-react-ecommerce.netlify.app'
// },
// {
//     description: 'Wesh - En ligne - Mini E-commerce sur les montre,mon Premier projet Vue Js ',
//     img: 'wesh.webp',
//     link: 'https://wesh-vue.netlify.app'
// },
// {
//     description: 'NoahStore - -En ligne - Petit E-commerce avec une base de donnée Mysql pour parachever ma formation vue Js ',
//     img: 'noahStore.webp',
//     link: 'https://noah-ecommerce-vueJs.netlify.app'
// },
// {
//     name: 'Univeran',
//     description: 'Un de mes nombreux Premier projet HTML/CSS ', img: 's7.webp',
//     link: 'https://evansuchwa.github.io/UnivearnTemplate/connexion.html'
// },
export const technosIcons: technosIconType = {
  html: <SkillIconsHtml />,
  css: <SkillIconsCss />,
  js: <SkillIconsJavascript />,
  ts: <SkillIconsTypescript />,
  php: <LogosPhp />,
  sass: <SkillIconsSass />,
  react: <SkillIconsReactDark />,
  next: <SkillIconsNextjsLight />,
  mongo: <SkillIconsMongodb />,
  mysql: <SkillIconsMysqlDark />,
  github: <SkillIconsGithubDark />,
  gitlab: <SkillIconsGitlabDark />,
  docker: <SkillIconsDocker />,
  vercel: <SkillIconsVercelDark />,
  heroku: <SkillIconsHeroku />,
  node: <SkillIconsNodejsDark />,
  prisma: <SkillIconsPrisma />,
  postgresql: <SkillIconsPostgresqlDark />,
  redis: <LogosRedis />,
  rabbitmq: <LogosRabbitmqIcon />,
};

export function getResumeLinkFromCookie() {
  if (getCookie("googtrans")?.endsWith("en")) return "/resumes/en.pdf";
  return "/resumes/fr.pdf";
}

export function redirectToResume() {
  if (typeof window !== "undefined") {
    return window.open(getResumeLinkFromCookie(), "_blank");
  }
}
