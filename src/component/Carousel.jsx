import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Utilisation de useEffect pour définir un intervalle de 2 secondes pour changer l'image
  useEffect(() => {
    const interval = setInterval(nextImage, 1300); // Appeler nextImage toutes les 2 secondes

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Utiliser un tableau vide pour s'assurer que useEffect ne s'exécute qu'une seule fois lors du montage du composant

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="carousel-item"
      />
    </div>
  );
};

export default Carousel;
