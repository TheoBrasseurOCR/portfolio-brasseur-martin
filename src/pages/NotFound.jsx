import React, { useEffect, useState } from "react";

function NotFound() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2300); // Redirection après 2.5 secondes de transition
    }, 1000); // Déclenchement du timer après 1 secondes

    return () => clearTimeout(timer); // Nettoyage du timer lors du démontage du composant
  }, []);

  return (
    <div className={`homeerr ${fade ? 'fade-out' : ''}`}>
      <div className={`err ${fade ? 'fade-out' : ''}`}>4 0 4</div>
      <div className={`content ${fade ? 'fade-out' : ''}`}>
        <p className={`errsuite ${fade ? 'fade-out' : ''}`}>E R R E U R</p>
        <p className={`errfin ${fade ? 'fade-out' : ''}`}>VOUS ALLEZ ÊTRE REDIRIGÉ AUTOMATIQUEMENT</p>
      </div>
    </div>
  );
}

export default NotFound;
