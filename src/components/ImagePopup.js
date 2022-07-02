function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__container-image">
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__figcaption"></figcaption>
        <button className="popup__close" type="button"></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
