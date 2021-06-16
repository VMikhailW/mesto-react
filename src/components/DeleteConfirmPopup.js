import React from "react";
import PopupWithForm from "./PopupWithForm";

const DeleteConfirmPopup = ({
  card,
  onClose,
  isOpen,
  onCardDelete,
  isLoading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onCardDelete(card);
  };

  return (
    <PopupWithForm
    buttonClassName="button popup__submit"
    buttonText={`${isLoading ? `Удаление...` : `Да`}`}
    name="remove-card"
    title="Вы уверены?"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  
      />
  );
};

export default DeleteConfirmPopup;
