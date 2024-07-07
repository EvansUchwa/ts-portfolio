import { LinkButton, SectionTitle } from "../../uikits/other";
const HomeAbout = () => {
  return (
    <div className="home-about">
      <div>
        <div className="abpImg">
          <img src={"/img/me.webp"} />
        </div>
        <div className="abp-Text">
          <SectionTitle title={"A propos de moi"} />
          <h2>Un développeur web passionné !</h2>

          <p>
            Passionné d'informatique et d'électronique depuis mon enfance , je
            n'ai pas hésité après l'obtention de mon baccalauréat à me lancer
            d'abord dans la programmation puis par la suite dans le
            développement web . J’ai profité de l'obtention d'une bourse de
            formation dans une université de chez moi pour me faire former en
            développement web full-stack. Mon expérience acquise au fil des
            projets me permet de mieux comprendre les attentes d'un client et de
            répondre précisement au besoin demandé en fonction du domaine
            d'activité . Du site vitrine au projet plus complexe , je vous
            propose une expertise et un développement qui correspond à vos
            attentes & à vos besoins. Et c'est dans l'optique de continuer à me
            perfectionner que je suis disponible pour la création de vos site
            internet (site vitrine, site e-commerce ou application web) , je
            suis également disponible pour toute collaboration dans le domaine
            du développement web. Ayant deja travailler régulièrement avec des
            clients de bourse differente , je vous propose des solutions à votre
            portée et adaptée à votre budget .
          </p>
          <LinkButton
            text={"Mon Cv"}
            link={process.env.resumeUrl!}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
