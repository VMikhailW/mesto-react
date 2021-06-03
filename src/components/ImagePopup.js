import React from 'react'
import PropTypes from 'prop-types'

function ImagePopup ({ card, isOpen, onClose }) {
  function getImagePopupClasses () {
    const classes = ['popup popup_type_picture']
    if (isOpen) classes.push('popup_opened')
    return classes.join(' ')
  }

  return (
    <div className={getImagePopupClasses()}>
      <div className="popup__container popup__container_type_picture">
        <button
          type="button"
          className="button popup__close opacity"
          onClick={onClose}
        />
        <img
          className="popup__image"
          src={card.link} alt={`Фотография места ${card.name}`}
        />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  )
}

ImagePopup.propTypes = {
  card: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default ImagePopup