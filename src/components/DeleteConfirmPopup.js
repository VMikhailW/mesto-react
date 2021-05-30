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
    name="remove-card"
    title="Вы уверены?"
    textButton="Да"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  
      >
        <input
          className="button popup__submit"
          type="submit"
          name="submit"
          value={`${isLoading ? `Удаление...` : `Да`}`}
        />
  
    </PopupWithForm>
  );
};

export default DeleteConfirmPopup;
