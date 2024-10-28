import { redirectToResume } from "@/helpers/others";
import { LinkButton, SectionTitle } from "../../uikits/other";
import { onMenuLinkClick } from "@/uikits/Nav";
const HomeAbout = () => {
  return (
    <div className="home-about" id="home-about">
      <div>
        <div className="abpImg">
          <img src={"/img/me.webp"} />
        </div>
        <div className="abp-Text">
          <SectionTitle title={"A propos de moi"} />
          <h2>Un développeur web passionné !</h2>

          <p>
            Passionné par le développement web et l'électronique depuis mon plus
            jeune âge, j'ai toujours suivi une approche ambitieuse pour
            progresser dans le domaine. Après mon baccalauréat, j'ai débuté par
            la programmation en C, avant de me spécialiser dans le développement
            web, principalement en JavaScript et TypeScript, tout en restant
            ouvert à d'autres technologies. Bénéficiaire d'une bourse de
            formation dans une université locale, j'ai pu renforcer mes
            compétences en développement full-stack.
          </p>

          <p>
            Aujourd'hui, avec plus de 4 ans d'expérience, j'ai eu l'opportunité
            de travailler sur des projets variés, allant de sites vitrines à des
            plateformes à fort trafic. Ma compréhension approfondie des attentes
            clients me permet de proposer des solutions précises, adaptées à
            chaque secteur d’activité. Grâce à cette expérience, je vous offre
            une expertise professionnelle, capable de transformer vos idées en
            sites web, plateformes e-commerce ou applications web répondant
            exactement à vos besoins.
          </p>

          <p>
            Fort de collaborations avec des clients de divers horizons et
            budgets, je conçois des solutions accessibles et alignées avec vos
            attentes. À travers cette démarche, je suis continuellement à la
            recherche de nouveaux défis pour élargir mes compétences et apporter
            des solutions novatrices. Si vous avez besoin d'un développeur
            rigoureux pour créer ou améliorer votre projet web, ou si vous
            souhaitez collaborer avec un professionnel engagé, n'hésitez pas à
            me contacter.
          </p>
          <section className="flex">
            <LinkButton
              text={"Mon Cv"}
              link={"/"}
              onClick={() => redirectToResume()}
            />
            <LinkButton
              text={"Mes travaux"}
              link={"/#"}
              datatype="home-work"
              isOutline={true}
              onClick={(e) => {
                onMenuLinkClick(e);
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
