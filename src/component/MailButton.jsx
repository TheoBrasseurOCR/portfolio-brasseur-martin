import React from "react";

const MailButton = () => {
  const handleMailButtonClick = () => {
    window.location.href = "mailto:martinbrasseur@outlook.fr";
  };

  return (
    <button className="mail-button" onClick={handleMailButtonClick}>
      M'envoyer un mail
    </button>
  );
};

export default MailButton;
