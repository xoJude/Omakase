import "./index.css";

// Images :
import presentation_video from "./assets/omakase-video.png"
import eric_face from "./assets/ericface.jpg";
import nicolas_face from "./assets/nicolasface.jpg";
import tripadvisor from "./assets/Logo Tripadvisor.webp"

// Composants :
import Header from "./components/header";
import { Video } from "./components/video";
import { Espace } from "./components/espace_blanc";
import { Part_Un } from "./components/part-un";
import Slider from "./components/slider";
import { Titre } from "./components/titre";
import { Right } from "./components/block/block-right";
import { Left } from "./components/block/block-left";
import { Reservation } from "./components/reservation";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Video url="https://video.wixstatic.com/video/2540a1_0fac82237f3e49fda8e14d443ac063b8/720p/mp4/file.mp4" image_video={presentation_video}></Video>
      <Espace></Espace>
      <Part_Un titre="OMAKASE - お任せ" num="text1" texte1="Est une expression japonaise qui signifie :" texte2="« Je m'en remets à vous »" texte3="cela vient du verbe japonais 'Makaseru' (任せる)" ></Part_Un>
      <Part_Un titre="CONCEPT" num="text2" texte1="Une expérience culinaire unique sur le Val D'Europe tout proche de Disneyland Paris imaginée par le Chef Eric Ticana (fondateur de l'Equipe de France de Sushi sacrée Vice Championne du Monde en 2018), son équipe et le Chef Pâtissier Nicolas Crenier, dans un cadre designé par la talentueuse architecte Caroline Tissier." texte2="Laissez-vous surprendre par un concept provenant tout droit du Japon et venez découvrir une cuisine fusion franco-japonaise surprenante. Installé sur un comptoir, les chefs travaillent devant vos yeux des produits méticuleusement sélectionnés par leurs soins. " ></Part_Un>
      <Espace></Espace>
      <Slider></Slider>
      <Espace></Espace>
      <Titre texte="Une expérience unique"></Titre>
      <Right background= {eric_face} texte="Eric Ticana, chef sushi depuis 2004, est un membre certifié par la World Sushi Skills Institute. Il est également l'unique ambassadeur France pour la World Sushi Cup. Sans cesse à la recherche de nouvelles saveurs, il a su développer des recettes et des techniques qu’il essaie aujourd’hui de partager et de transmettre autour de lui. En 2007 , il decide de quitter l’ile de France et accepte le défi d’aller en haute Savoie au Restaurant ô flaveurs chez le chef Jérôme MAMET et obtient 1 étoile au guide Michelin en tant que chef pâtissier.. Il saura amener cette petite touche de gourmandise pour conclure votre dîner Omakase."></Right>
      <Titre texte="Une saveur extraordinaire "></Titre>
      <Left background={nicolas_face} texte="Nicolas Crenier, chef pâtissier depuis 2007, a fait ses armes au Bristol auprès du chef Gilles Marchal. Il continua sa formation dans différents palaces et restaurants de renom tels que le Beau rivage palace à Lausanne - 2 étoiles au guide Michelin, le Parc des eaux vives à Genève - 2 étoiles au guide Michelin, ainsi qu'au Laurent à Paris - 2 étoiles au guide Michelin.  Laissez-vous surprendre par un concept provenant tout droit du Japon et venez découvrir une cuisine fusion franco-japonaise surprenante. Installé sur un comptoir, les chefs travaillent devant vos yeux des produits méticuleusement sélectionnés par leurs soins."></Left>
      <Reservation logo={tripadvisor} button_text="Réserver" titre="PROFITEZ DU VOYAGE..." texte1="Elu meilleur restaurant de Seine et Marne en 2022." texte2="MERCI BEAUCOUP!!!"></Reservation>
      <Espace></Espace>
      <Footer/>
    </div>
  );
  }

export default App;




