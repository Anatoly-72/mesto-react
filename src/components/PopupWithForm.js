function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && 'popup_active'
      }`}
    >
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={`${props.form}`} noValidate>
          {props.children}
          <button className="popup__form-btn" type="submit">
            {props.buttonText}
          </button>
        </form>
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
