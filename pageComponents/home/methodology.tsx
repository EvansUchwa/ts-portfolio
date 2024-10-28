import {
  IcBaselineSwapHorizontalCircle,
  IcRoundHearing,
  IcRoundPublishedWithChanges,
} from "@/uikits/icons";
import { SectionTitle } from "@/uikits/other";
import React from "react";

function HomeMyMethodology() {
  const steps = [
    {
      icon: <IcRoundHearing />,

      title: `Écoute & Compréhension`,
      text: `Chaque projet commence par une phase d’écoute et de compréhension approfondie des besoins du client. Il est essentiel pour moi de saisir les attentes et le contexte du projet afin de proposer des solutions pertinentes et personnalisées. Cette étape est la clé pour un produit final en parfaite adéquation avec les objectifs du client.`,
    },
    {
      icon: <IcBaselineSwapHorizontalCircle />,

      title: `Transparence & Communication`,
      text: `Je privilégie une communication ouverte tout au long du processus de développement. Les échanges réguliers et la transparence garantissent que le projet reste aligné avec la vision du client, et permettent d’intégrer des ajustements en temps réel. Mon expérience m’a appris que les meilleures collaborations naissent d’une communication honnête et respectueuse.`,
    },
    {
      icon: <IcRoundPublishedWithChanges />,
      title: `Expertise & Adaptabilité`,
      text: `En tant que développeur full-stack, je mets à profit mes compétences en JavaScript et TypeScript, tout en restant ouvert aux nouvelles technologies. Je veille à proposer des solutions à la fois robustes et modernes, adaptées aux spécificités de chaque domaine. Mon engagement : une application web performante et à la hauteur de vos ambitions.`,
    },
  ];
  return (
    <div className="home-methodology">
      <SectionTitle title={"Ma méthodologie"} />
      <section>
        {steps.map((item, i) => (
          <article key={"methodology nb" + i} className="methodologyCard">
            <span>{item.icon}</span>
            <h3>{item.title} </h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default HomeMyMethodology;
