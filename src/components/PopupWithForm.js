import React from "react";

const PopupWithForm = ({ name, title, isOpen, onClose, onSubmit, children }) => {
  const handleEscapeClose = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeClose, false);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose, false);
    };
  }, [isOpen]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <section
      className={`${
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }`}
      onMouseUp={handleOverlayClose}
    >
      <div
        className={`${
          name === "picture"
            ? `popup__container popup__container_type_picture`
            : `popup__container`
        }`}
      >
        <button
          className="button popup__close opacity"
          type="button"
          onClick={onClose}
        />
       <h2 className="popup__title">{title}</h2>
        <form
            className={`popup__form form_type_${name}`}
            action="#"
            name={name}
            onSubmit={onSubmit}
            noValidate
        >
            <div className="popup__cover">
                {children}
            </div>
        </form>
      </div>
    </section>
  );
};

export default PopupWithForm;
