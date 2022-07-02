function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="popup__form-btn" type="submit">
            {props.buttonText}
          </button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
