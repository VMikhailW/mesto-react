import React from "react";
import PopupWithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isLoading }) => {
  const fields = ["avatar"];

  const {
    isValid,
    setIsValid,
    inputValue,
    setInputValue,
    validationMessage,
    setValidationMessage,
    handleInputChange,
    fieldsEnumeration,
  } = useValidation(fields);

  const avatarInputRef = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  };

  React.useEffect(() => {
    setInputValue(fieldsEnumeration(""));
    setIsValid(fieldsEnumeration(false));
    setValidationMessage(fieldsEnumeration(""));
  }, [isOpen, setInputValue, setIsValid, setValidationMessage]);

  return (
    <PopupWithForm name="avatar" isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Обновить аватар</h2>
      <form
        className={"popup__form form_type_avatar"}
        action="#"
        name="avatar"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="popup__cover popup__cover_type_avatar">
          <label className="popup__control">
            <input
              ref={avatarInputRef}
              className={`${
                validationMessage.avatar
                  ? `popup__input popup__input_type_avatar popup__input_type_error`
                  : `popup__input popup__input_type_avatar`
              }`}
              type="url"
              name="avatar"
              value={inputValue.avatar}
              placeholder="Ссылка на картинку"
              onChange={handleInputChange}
              required
            />
            <span
              className={`${
                isValid.avatar
                  ? `popup__error`
                  : `popup__error popup__error_type_active`
              }`}
            >
              {validationMessage.avatar}
            </span>
          </label>
        </div>
        <input
          className={`${
            isValid.avatar
              ? `button popup__submit`
              : `button popup__submit popup__submit_type_disabled`
          }`}
          type="submit"
          value={`${isLoading ? `Сохранение...` : `Сохранить`}`}
          name="submit"
        />
      </form>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
