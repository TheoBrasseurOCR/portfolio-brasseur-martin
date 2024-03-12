import React, { useState, useEffect } from "react";
import FooterMenu from "../component/FooterMenu";
import portrait from "../img/portrait.webp";
import logo from "../img/neoma.webp";
import cv from "../img/cv-brasseur-martin.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../component/Carousel";
import logo1 from "../img/m-c.webp";
import logo2 from "../img/roe.webp";
import logo4 from "../img/ruinart0.webp";
import logo5 from "../img/veuve-c.webp";
import logo6 from "../img/tai.webp";
import MailButton from "../component/MailButton";

const Accueil = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const phrases = [" en marketing", " en export", " en retail"];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const images = [logo1, logo2, logo4, logo5, logo6];

  return (
    <div className="proj fade-in">
      <div className="accueil">
        <div className="content">
          <div className="text">
            <h1>
              BRASSEUR
              <br />
              Martin
            </h1>
            <h2>PORTFOLIO</h2>
          </div>
          <div className="image">
            <img
              src={portrait}
              alt="Portrait de Martin Brasseur"
              className="portrait"
            />
          </div>
        </div>
        <FooterMenu />
      </div>
      <div className="suite">
        <div className="presentation">
          <h2 id="presentation">PRESENTATION</h2>
        </div>
        <div className="boxprez">
          <p className="befanim">
            Je recherche un stage
            <br />
            <span className="typing-animation">{phrases[textIndex]}</span>
          </p>
          <p className="prez">
            Bonjour, je suis Martin Brasseur, un étudiant de 21 ans résidant au
            cœur de Reims, berceau prestigieux du champagne.
            <br />
            Animé par une passion débordante pour cet univers, je suis
            actuellement à la recherche d'un stage de césure de 6 mois dans le
            domaine du champagne.
            <br />
            Mon enthousiasme et ma détermination font de moi un candidat
            désireux d'explorer chaque facet du métier, du marketing à la
            distribution, avec une soif insatiable d'apprentissage.
            <br />
            Déterminé à vous rejoindre dans cette aventure, où innovation et
            tradition se marient pour créer des expériences inoubliables, ainsi
            qu'à apporter ma contribution au sein de votre prestigieuse maison.
            <br />
            <br />
            ________________________
          </p>
        </div>
      </div>
      <div className="suitedeux">
        <div className="parcours">
          <h2 id="mon-parcours">
            MON PARCOURS
            <br />
            <p className="prez">
              _____________________________
              <br />
              <br />
              <span className="dl">
                <a href={cv} download="cv-brasseur-martin.pdf">
                  Télécharger mon CV <FontAwesomeIcon icon={faDownload} className="butdl" />
                </a>
              </span>
            </p>
            <FontAwesomeIcon icon={faArrowTurnUp} className="back-arrow" />
            <span className="sco">Scolarité</span>
            <ul className="scosuite">
              <li>
                Master, Programme Grande Ecole (PGE) - Neoma Business School -
                Campus de Reims
              </li>
              <li>CPGE ECE - Cité scolaire Gambetta-Carnot - Arras</li>
              <li>
                Baccalauréat ES mention Bien - Cité scolaire Gambetta-Carnot -
                Arras
              </li>
            </ul>
            <FontAwesomeIcon icon={faArrowTurnUp} className="back-arrow" />
            <span className="sco">Expérience</span>
            <ul className="scosuite">
              <li>Acces Neoma Reims - Président</li>
              <li>BDE Neoma Reims - Pôle Logistique</li>
              <li>Transports Bray - Stagiaire commercial</li>
            </ul>
          </h2>
          <div className="image-logo">
            <img src={logo} alt="logo de Neoma" className="logo" />
          </div>
        </div>
      </div>
      <div className="suitedeux-deux">
        <div className="parcours-deux">
          <div className="texte-logo-deux">
            <p className="logo-deux">
              Acces est une association de NEOMA Business School Reims,
              bénéficiant d'un héritage de 30 ans d'existence.
              <br />
              Son action vise à promouvoir au sein de l'établissement les
              valeurs de l'œnologie, du champagne, de la gastronomie française,
              du luxe et de l'art de vivre, à travers une série d'événements de
              haute qualité organisés tout au long de l'année.
              <br />
              <br />
              En tant que président de l'association, j'ai eu le privilège de
              jouer un rôle central dans la planification et la mise en œuvre
              d'événements d'envergure, tels qu'un week-end oeno-touristique ou
              encore une soirée de gala, rassemblant jusqu'à 600 étudiants.
              <br />
              Ces expériences m'ont permis de développer des compétences
              organisationnelles et de gestion d'événements, tout en contribuant
              à renforcer la réputation et l'impact positif d'Acces au sein de
              la communauté étudiante de NEOMA Business School.
              <br />
              <br />
            </p>
          </div>
          <h2 id="acces" className="mon-parcours-deux">
            ACCES
            <br />
            <p className="prez-deux">_____________</p>
            <span className="sco-deux">Héritage</span>
            <FontAwesomeIcon icon={faArrowTurnUp} className="back-arrow-deux" />
            <ul className="scosuite-deux">
              L'association Acces est vielle de plus de 30 ans
            </ul>
            <span className="sco-deux">Popularité</span>
            <FontAwesomeIcon icon={faArrowTurnUp} className="back-arrow-deux" />
            <ul className="scosuite-deux">
              Acces compte une centaine de membres
            </ul>
            <span className="sco-deux">Rayonnement</span>
            <FontAwesomeIcon icon={faArrowTurnUp} className="back-arrow-deux" />
            <ul className="scosuite-deux">
              Collaboration avec des Maisons reconnues
            </ul>
          </h2>
        </div>
      </div>
      <div className="suitedeux-trois">
        <div className="parcours-trois">
          <h2 id="references">
            REFERENCES
            <br />
            <p className="prez-deux">_______________________</p>
            <span className="marques">
              Les Maisons avec lesquelles j'ai pu collaborer :
            </span>
          </h2>
          <div className="carou-cont">
            <Carousel images={images} />
          </div>
        </div>
      </div>
      <div className="suitedeux-quatre">
        <div className="parcours-quatre">
          <h2 id="contact">
            CONTACTEZ MOI
            <br />
            <p className="prez-deux">
              ________________________________________
            </p>
            <MailButton />
            <div className="infoperso">
              <div className="info1">
                <p className="prez-trois">Adresse</p>
                <p className="prez-trois-ad">52 rue Boulard, 51100 REIMS</p>
              </div>
              <div className="info2">
                <p className="prez-trois">Email</p>
                <p className="prez-trois-ad">martinbrasseur@outlook.fr</p>
              </div>
              <div className="info3">
                <p className="prez-trois">Téléphone</p>
                <p className="prez-trois-ad">06-01-34-20-15</p>
              </div>
            </div>
            <div className="ml-container">
              <p className="ml">
                <a onClick={toggleModal}>MENTIONS LEGALES</a>
              </p>
            </div>
          </h2>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p className="mltxt">
              Ce site est réalisé par Théo Brasseur -
              theobrasseurlille@hotmail.com
              <br />
              Ce site est hébergé par Vercel, 440 N Barranca Ave #4133, Covina,
              CA 91723, USA., (951) 383-6898, support@vercel.com.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accueil;
