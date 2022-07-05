function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type ${props.name} ${
        props.card && 'popup_active'
      }`}
    >
      <figure className="popup__container-image">
        <img
          className="popup__image"
          src={props.card?.link}
          alt={props.card ? props.card.name : ''}
        />
        <figcaption className="popup__figcaption">
          {props.card ? props.card.name : ''}
        </figcaption>
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
