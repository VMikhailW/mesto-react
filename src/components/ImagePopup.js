import React from "react";
import PopupWithForm from "./PopupWithForm";

const ImagePopup = ({ card, isOpen, onClose }) => {
  return (
    <PopupWithForm name="picture" isOpen={isOpen} onClose={onClose}>
      <figure className="popup__figure">
        <img className="popup__image" src={card.link} alt={card ? card.name : ''} />
        <figcaption className="popup__caption">{card ? card.name : ''}</figcaption>
      </figure>
    </PopupWithForm>
  );
};

export default ImagePopup;
