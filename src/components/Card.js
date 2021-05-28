import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `${
    isLiked
      ? `button pictures__like pictures__like_active opacity`
      : `button pictures__like opacity`
  }`;

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="pictures__item">
      <button
        className={`${
          isOwn
            ? `button pictures__delete pictures__delete_show opacity`
            : `button pictures__delete opacity`
        }`}
        type="button"
        onClick={handleDeleteClick}
      />
      <img
        className="pictures__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="pictures__cover">
        <p className="pictures__title">{card.name}</p>
        <div className="pictures__like-cover">
          <button
            className={cardDeleteButtonClassName}
            type="button"
            onClick={handleLikeClick}
          />
          <span className="pictures__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
